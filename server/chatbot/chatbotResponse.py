from chatbot import Chatbot

chatbot = Chatbot('Ron Obvious',"data.json")
chatbot.setup_chatbot()

def getResponse(msg):
    return chatbot.choose_message(msg)