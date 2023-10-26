import streamlit as st
st.set_page_config(page_title="Finicity", layout="wide",page_icon="https://prod-finweb-frontend.s3-us-west-2.amazonaws.com/wp-content/uploads-new/2022/08/17210450/mc_symbol.svg")

import matplotlib.pyplot as plt
from io import BytesIO
import pandas as pd
import requests
import datetime
import time
import os

from utils import extract_code_from_response
from custom_agent import customAgent
from utils import check_token
from PIL import Image

st.title("Talk to your bank account")

messageboard = st.empty()
# --------------------------------------------------------------------------------

# Initialize Session State variables:
if 'token' not in st.session_state:
    st.session_state.token={'value': None, 'expiry': None}

# --------------------------------------------------------------------------------

base_url = 'https://finicity-ai-assistant.azurewebsites.net'
# base_url = 'http://localhost:8080'

#---------------------------------------------------------------------------------

## Sidebar

with st.sidebar:

    # st.sidebar.markdown("""
    # <div >
    #     <h3 style="color: white;font-family: monospace; font-size: 1.75rem">payments<span style="color: #F8882B;font-family: monospace;font-size: 1.75rem">nz<span/></h3>
    # </div>
    # """, unsafe_allow_html=True)

    logo_image = Image.open('finicity_logo.png')

    st.image(logo_image)
    
    partner_id = st.text_input("Partner Id", "Enter partner id...")
    partner_secret = st.text_input("Partner Secret", "Enter partner secret...")
    finicity_app_key = st.text_input('Finicity-App-Key', 'Enter finicity app key...')
          
    if st.button(":white[Get Auth token]"):        
        if partner_id and partner_secret and finicity_app_key != None:

            headers = {
                "Content-Type": "application/json"                
            }
            body = {
                "partnerId": partner_id,
                "partnerSecret": partner_secret,
                "finicityAppKey": finicity_app_key
            }
            createToken = requests.post(base_url + '/api/createToken',json=body, headers=headers)   
            if createToken.status_code == 200:
                token = createToken.json()["token"]
                print(f"Token: {token}")
                if token != None:
                    # token is valid for 2 hours but as finicity best practice generate new token after 90 minutes 
                    st.text(token)
                    current_time = int(time.time())
                    token_expiry_time = current_time + (90 * 60) 
                    st.session_state.token = {'value': token, 'expiry': token_expiry_time}                
            else:
                messageboard.error("Authentication failed, please try again", icon ='🚨') 
                time.sleep(3)
                messageboard.empty() 
    
    st.markdown("""<style> div.st-emotion-cache-1b531ko e1nzilvr5 > p { color: #ffffff }""", unsafe_allow_html=True)

    st.markdown("""
        <style> 
        div.stButton > button>div>p>div {
            border-color: #AFACAC;
            color:#ffffff;
        }
        .css-1v3lvwm{
            border: 1px solid #AFACAC;
        }
        </style>""", unsafe_allow_html=True)

    if st.button(":white[Get accounts and transactions data]", type="secondary"):
        if (check_token(st.session_state.token)):
                authToken = st.session_state.token.get('value')
                       
                headers = {
                "Content-Type": "application/json"                
                }
                body = {
                    "authToken": authToken,
                    "finicityAppKey": finicity_app_key,
                    "customerId": '6001391193'
                }
                
                transactions= requests.post(base_url + '/api/transactions',json=body, headers=headers)                
                accounts = requests.post(base_url + '/api/accounts',json=body,headers=headers)    
                 
                if transactions.status_code  == 200:
                    
                    transactionsData = transactions.json()['transactions']       
                    accountsData = accounts.json()['accounts']
                                
                    selectedTransactionsData = [
                        {
                            'Account ID': int(entry['accountId']),
                            'Transaction ID': int(entry['id']) if 'id' in entry else None,
                            'Transaction Amount': entry['amount'] if 'amount' in entry else None,
                            'Transaction Status': entry['status'] if 'status' in entry else None,
                            'Transaction Description': entry['description'] if 'description' in entry else None,
                            'Transaction Memo': entry['memo'] if 'memo' in entry else None,
                            'Transaction Status': entry['status'] if 'status' in entry else None,
                            'Transaction Interest Amount': entry['interestAmount'] if 'interestAmount' in entry else None,
                            'Transaction Principal Amount': entry['principalAmount'] if 'principalAmount' in entry else None,
                            'Transaction Escrow Amount': entry['escrowAmount'] if 'escrowAmount' in entry else None,
                            'Transaction Fee Amount': entry['feeAmount'] if 'feeAmount' in entry else None,
                            'Transaction Unit Quantity': entry['unitQuantity'] if 'unitQuantity' in entry else None,
                            'Transaction Unit Action': entry['unitAction'] if 'unitAction' in entry else None,
                            'Transaction Posted Date': datetime.datetime.utcfromtimestamp(int(entry['postedDate'])).strftime('%Y-%m-%dT%H:%M:%S.000Z'),
                            'Transaction Date': datetime.datetime.utcfromtimestamp(int(entry['transactionDate'])).strftime('%Y-%m-%dT%H:%M:%S.000Z'),                    
                            'Transaction PayeeName': entry['categorization']['normalizedPayeeName'] if 'normalizedPayeeName' in entry['categorization'] else None,
                            'Transaction Category': entry['categorization']['category'] if 'category' in entry['categorization'] else None,
                            'Transaction Best Representation': entry['categorization']['bestRepresentation'] if 'bestRepresentation' in entry['categorization'] else None,
                            'Transaction Country': entry['categorization']['country'] if 'country' in entry['categorization'] else None
                        }
                        for entry in transactionsData
                    ]
                
                    selectedAccountsData = [
                        {
                            'Account ID': int(entry['id']),    
                            'Account Number': entry['number'] if 'number' in entry else None,
                            'Account Name': entry['name'] if 'name' in entry else None,                                                    
                            'Account Type': entry['type'] if 'type' in entry else None,
                            'Account Status': entry['status'] if 'status' in entry else None,                                            
                        }
                        for entry in accountsData
                    ]

                    transactionsDataFrame = pd.DataFrame(selectedTransactionsData)            
                                        
                    accountsDataFrame = pd.DataFrame(selectedAccountsData)

                    merged_df = transactionsDataFrame.merge(accountsDataFrame, left_on='Account ID', right_on='Account ID', how='inner')

                    merged_df.to_csv('finicity_data.csv', index=False)
                
                    messageboard.success('Data fetched successfully', icon="🎉") 
                    time.sleep(3)
                    messageboard.empty() 
                else:                            
                    messageboard.error("Failed to fetch data, please try again", icon ='🚨') 
                    time.sleep(3)
                    messageboard.empty() 
        else:
            messageboard.warning("To use this application, please get auth token...") 
            time.sleep(3)
            messageboard.empty() 

#---------------------------------------------------------------------------------

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = []

def csv_analyzer_app(user_input):

    df = pd.read_csv("finicity_data.csv")
    response = customAgent(user_input)
    print(response,"response")
    code_to_execute = extract_code_from_response(response)

    print(code_to_execute,"code_to_execute")       

    if code_to_execute:
        try:
            exec(code_to_execute, globals(), {"df": df, "plt": plt})        
            fig = plt.gcf() 
            buf = BytesIO()
            fig.savefig(buf, format="png")           
            return buf           
        except Exception as e:
            return (f"Error executing code: {e}")
    else:
            return response


# Display chat messages from history on app rerun
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        if type(message["content"]) is str:
            st.markdown(message["content"])
        else:            
            st.image(message["content"])  

#---------------------------------------------------------------------------------

# Accept user input
if user_input := st.chat_input("Plot a bar graph of credit and debit amount"):
    
    if not check_token(st.session_state.token):
        messageboard.warning("To use this application, please login...") 
        time.sleep(3)
        messageboard.empty() 
    elif os.stat("finicity_data.csv").st_size == 0:
        messageboard.warning("Transaction and account data not found") 
        time.sleep(3)
        messageboard.empty() 
    else:
        with st.chat_message("user"):
            st.markdown(user_input)

        st.session_state.messages.append({"role": "user", "content": user_input}) 

        # Display assistant response in chat message container
        with st.chat_message("assistant"):
            message_placeholder = st.empty()
            assistant_response =  csv_analyzer_app(user_input)
            if type(assistant_response) is str:
                message_placeholder.markdown(assistant_response)
            else:
                st.image(assistant_response)    
                
        st.session_state.messages.append({"role": "assistant", "content": assistant_response}) 

