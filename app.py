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

if 'selectboxvisibility' not in st.session_state:
    st.session_state.selectboxvisibility = True

if 'options' not in st.session_state:
    st.session_state.options = []

if 'customersdata' not in st.session_state:
    st.session_state.customersdata = []
# --------------------------------------------------------------------------------

base_url = 'https://finicity-ai-assistant.azurewebsites.net'
# base_url = 'http://localhost:8080'

#---------------------------------------------------------------------------------
def generate_token(partner_id, partner_secret,finicity_app_key):

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
        # token is valid for 2 hours as finicity best practice is to generate new token after 90 minutes                    
            current_time = int(time.time())
            token_expiry_time = current_time + (90 * 60) 
            st.session_state.token = {'value': token, 'expiry': token_expiry_time}  
            return True
    return False

def get_customer_data(authToken,finicity_app_key ):
        headers = {
                    "Content-Type": "application/json"                
                }                         
        # call get cutomers 
        customer_body = {
                            "authToken": authToken,
                            "finicityAppKey": finicity_app_key                                
        }
        customers= requests.post(base_url + '/api/customers',json=customer_body, headers=headers)  
        customers_data = customers.json()['customers'] 
        return customers_data

def update_params():
    if check_token(st.session_state.token):
        selected_option = st.session_state['customer_select']
        if selected_option == "None":
            selected_id = None
        else:
            selected_id = next((item['id'] for item in st.session_state.customersdata if item['username'] == selected_option), None)                        
    
        if selected_id != None:
                headers = {
                                    "Content-Type": "application/json"                
                                } 
                body = {
                        "authToken":  st.session_state.token.get('value'),
                        "finicityAppKey": finicity_app_key,
                        "customerId": selected_id
                    }                    
                accounts = requests.post(base_url + '/api/accounts',json=body,headers=headers)   
                if  accounts.status_code == 200:     
                    accountsData = accounts.json()['accounts']
                    if len(accountsData)>0 : 
                        transactions= requests.post(base_url + '/api/transactions',json=body, headers=headers)                                                      
                        if  transactions.status_code == 200: 
                            transactionsData = transactions.json()['transactions']   
                            if  len(transactionsData)>0 : 
                                selectedTransactionsData = [
                                                        {
                                                            'Account ID': int(entry['accountId']),
                                                            'Transaction ID': int(entry['id']) if 'id' in entry else None,
                                                            'Transaction Amount': entry['amount'] if 'amount' in entry else None,
                                                            'Status': entry['status'] if 'status' in entry else None,
                                                            'Description': entry['description'] if 'description' in entry else None,
                                                            'Posted Date': datetime.datetime.utcfromtimestamp(int(entry['postedDate'])).strftime('%Y-%m-%dT%H:%M:%S.000Z'),
                                                            'Status': entry['status'] if 'status' in entry else None,   
                                                            'Category': entry['categorization']['category'] if 'category' in entry['categorization'] else None,                                                                                   
                                                            'Transaction Date': datetime.datetime.utcfromtimestamp(int(entry['transactionDate'])).strftime('%Y-%m-%dT%H:%M:%S.000Z'),                                                
                                                            'Interest Amount': entry['interestAmount'] if 'interestAmount' in entry else None,
                                                            'Principal Amount': entry['principalAmount'] if 'principalAmount' in entry else None,
                                                            'Escrow Amount': entry['escrowAmount'] if 'escrowAmount' in entry else None,
                                                            'Fee Amount': entry['feeAmount'] if 'feeAmount' in entry else None,
                                                            'Unit Quantity': entry['unitQuantity'] if 'unitQuantity' in entry else None,
                                                            'Unit Action': entry['unitAction'] if 'unitAction' in entry else None,
                                                            'PayeeName': entry['categorization']['normalizedPayeeName'] if 'normalizedPayeeName' in entry['categorization'] else None,
                                                            'Memo': entry['memo'] if 'memo' in entry else None,
                                                            'Best Representation': entry['categorization']['bestRepresentation'] if 'bestRepresentation' in entry['categorization'] else None,
                                                            'Country': entry['categorization']['country'] if 'country' in entry['categorization'] else None
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
                                messageboard.error("No transactions found for this customer", icon ='🚨') 
                                time.sleep(3)
                                messageboard.empty() 
                        else: 
                            messageboard.error("Failed to fetch transactions. Please try again", icon ='🚨') 
                            time.sleep(3)
                            messageboard.empty() 
                    else: 
                        messageboard.error("No data found. Please select a different account", icon ='🚨') 
                        time.sleep(3)
                        messageboard.empty() 

## Sidebar

with st.sidebar:

    logo_image = Image.open('finicity_logo.png')

    st.image(logo_image)
    
    partner_id = st.text_input("Partner Id", "2445583449522")
    partner_secret = st.text_input("Partner Secret", "Ls30G44dezb6AbOmZWOL")
    finicity_app_key = st.text_input('Finicity-App-Key', 'bb78291718b6eb8d078e8651f6d7998d')
          
    if st.button(":white[Generate Auth token]"):        
        if partner_id and partner_secret and finicity_app_key != None:
                partner_id = partner_id.strip()
                partner_secret = partner_secret.strip()
                finicity_app_key = finicity_app_key.strip()                
                if generate_token(partner_id, partner_secret,finicity_app_key):                         
                        messageboard.success('Auth token generated successfully', icon="🎉") 
                        time.sleep(3)
                        messageboard.empty()    
                        
                        authToken = st.session_state.token.get('value')
                        customers_data = get_customer_data(authToken=authToken, finicity_app_key=finicity_app_key)
                       
                        options = [item['username'] for item in customers_data] 
                        options.insert(0, "Select a customer")  
                        st.session_state.customersdata = customers_data
                        st.session_state.options = options
                        st.session_state.selectboxvisibility = False
          
                else:
                    messageboard.error("Authentication failed, please try again", icon ='🚨') 
                    time.sleep(3)
                    messageboard.empty() 
        
    st.selectbox('Select a customer',  st.session_state.options , key="customer_select" , disabled=st.session_state.selectboxvisibility ,  on_change=update_params)

    st.markdown("""  <style> div.st-emotion-cache-hsn27d e1nzilvr5>p { color: #ffffff }  <style> """, unsafe_allow_html=True)

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
        messageboard.warning("To use this application, please generate auth token...") 
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

