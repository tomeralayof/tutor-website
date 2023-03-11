import json

class ChatbotJson:

    def __init__(self,fileName):
        self.fileName = fileName

    def load_file(self):
        with open(self.fileName, 'r', encoding = 'utf-8') as f:
            data = json.load(f)
        return data