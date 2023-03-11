from chatterbot import ChatBot
from trainer import ChatbotTrainer
from chatterbot.logic import BestMatch

class Chatbot:

    def __init__(self,chatbotName,fileName):
        self.chatbot = ChatBot(chatbotName)
        self.trainer = ChatbotTrainer()
        self.dataFileName = fileName

    def setup_chatbot(self):
        self.chatbot.max_similarity_threshold = 0.8
        self.trainer.train(self.chatbot,self.dataFileName)
    
    def choose_message(self,msg):
        return self.chatbot.get_response(msg)



# Define the logic adapter
        #logic_adapter = BestMatch (
        #    response_selection_method = 'get_random_response',
        #    statement_comparison_function = JaccardSimilarity,
        #    default_response = 'I am sorry, but I do not understand.')
        # Set the logic adapter for the chatbot
        #chatbot.logic_adapters = [logic_adapter]