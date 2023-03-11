from chatterbot.trainers import ListTrainer
from chatbotJson import ChatbotJson

class ChatbotTrainer:
    
    def train(self,chatbot, filename):
        
        jsonLoader = ChatbotJson(filename)
        data = jsonLoader.load_file()

        trainer = ListTrainer(chatbot)
        ChatbotTrainer.set_trained_data(trainer,data)

        return trainer

    @staticmethod
    def set_trained_data(trainer,data):
        for item in data:
            question = item['text']
            answer = item['response']
            trainer.train([question, answer])
