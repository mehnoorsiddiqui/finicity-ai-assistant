from langchain.agents import  AgentExecutor
from langchain.agents import OpenAIFunctionsAgent
from langchain.agents import initialize_agent, AgentType, Tool
from langchain.prompts import MessagesPlaceholder
from langchain_experimental.tools import PythonAstREPLTool
import pandas as pd
from langchain.chat_models import ChatOpenAI
from pydantic import BaseModel, Field
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.agents.agent_toolkits.conversational_retrieval.tool import create_retriever_tool
from langchain.document_loaders.csv_loader import CSVLoader
import os
from langchain.schema.messages import SystemMessage
import streamlit as st
from langchain.chains.conversation.memory import ConversationBufferWindowMemory
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

# Set up the Key Vault client

credential = DefaultAzureCredential()
vault_url = "https://finicity-openai-key.vault.azure.net"
client = SecretClient(vault_url= vault_url, credential=credential)

os.environ["OPENAI_API_KEY"] =  client.get_secret("openai-key").value

# os.environ["OPENAI_API_KEY"] = st.secrets["OPENAI_API_KEY"]

pd.set_option('display.max_rows', 20)
pd.set_option('display.max_columns', None)

memory_key = "chat_history"
memory = ConversationBufferWindowMemory(k=4,memory_key=memory_key,return_messages=True) 
# ConversationBufferMemory(memory_key=memory_key, return_messages=True)
llm = ChatOpenAI(temperature=0,model='gpt-4-0613', max_tokens=1500)
# embeddings = OpenAIEmbeddings()
# loader = CSVLoader(file_path="merged_data.csv")
# documents = loader.load()
# vectorstore = FAISS.from_documents(documents, embeddings)
# retriever_tool = create_retriever_tool(vectorstore.as_retriever(), "qualitative_search", "Search for qualitative questions about structure of csv data")

TEMPLATE = """You are a smart financial analyst who can make charts and visualizations. You are good at analyzing and answering financial questions.

    You are working with a pandas dataframe in Python. The name of the dataframe is `df`.
    It is important to understand the attributes of the dataframe before working with it. This is the result of running `df.head().to_markdown()`

    <df>
    {dhead}
    </df>
    
    Here Transaction Description tells about the type of transaction. It can be a debit or credit transaction along with type like CHECKING, SAVINGS, CREDIT CARD, Autoloan credit,Autoloan debit  etc.
    
    You are not meant to use only these rows to answer questions - they are meant as a way of telling you about the shape and schema of the dataframe.
    You also do not have to use only the information here to answer questions - you can run intermediate queries to do exporatory data analysis to give you more information as needed.

    You have a tool called `python_repl`. Use it to answer questions related to analysis of data. Donot use it for making graphs or charts. 
    Think about what data columns you need and why, then proceed. 
    
    For example:
    
    <question>How much money have I credited and debited in each account? or list transactions</question>
    Negative transaction means debit and positive transaction means credit. You need to group by credited and debited amounts by looking at the postive and negative amounts then sum the amount. 
    <logic>
    Use `python_repl` to run intermediate queries to do exporatory data analysis. Use `python_repl` tool if any code execution is required instead of directly returning code.
    "Think about what data columns you need related to the user query and why, then proceed."
    If the answer contains multiple rows and columns consider displaying it using markdown. Make sure the answer is unambiguous.
    Donot return python code as you are asked for analysis of data not graph or chart.
    </logic>
    
    <question>Plot a graph of all the transactions</question>
    <logic>
    Use no tool as you are asked to draw/plot/visualize graph of data so return the python code wrapped inside ```python``` only in this case.
    The code can be composed of multiple lines.
    Look at the structure, type of data and column names in dataframe enclosed in <df> </df> before generating code. Use column names from the dataframe instead of making up yourself.
    Think what the data is and how it should be transformed according to query E.g Transaction Date and Posted Date need to convert into datetime format
    Use the newer version of pandas e.g dt.week is depreciated so instead use dt.isocalendar().week
    Make sure the generated code is compilable, otherwise modify it
    Rotate the x-axis date labels for readability.
    Use plt.tight_layout() to ensure the labels are not cut off if needed
    Adjust the font size of the lables to be between 11px to 13px
    Make sure the figure size is (figsize=(6, 4))
    </logic>
    
    If the question is not related to the context above then think if it can be answered using the `python_repl`, otherwise you can say "I don't know I can only answer about your finicity data".
    """

def customAgent(user_query):

    class PythonInputs(BaseModel):
        query: str = Field(description="code snippet to run")

    df = pd.read_csv("finicity_data.csv")

    template = TEMPLATE.format(dhead=df.head().to_markdown())

    system_message = SystemMessage(
        content=template
    )
    
    prompt = OpenAIFunctionsAgent.create_prompt(
        system_message=system_message,
        extra_prompt_messages=[MessagesPlaceholder(variable_name=memory_key)]
    )
   
    repl = PythonAstREPLTool(
        locals={"df": df}, name="python_repl",
        description="Useful when you need to do data analysis it runs code and returns the output of the final line"
        # args_schema=PythonInputs)        
        )

    tools = [repl]

    agent = OpenAIFunctionsAgent(llm=llm, prompt=prompt, tools=tools)
    agent_executor = AgentExecutor.from_agent_and_tools(agent=agent, tools=tools, max_iterations=4, early_stopping_method="generate",memory=memory,verbose=True)
    a= agent_executor.run(user_query)
    print(a)
    return a
    
