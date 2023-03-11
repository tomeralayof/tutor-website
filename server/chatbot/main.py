from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbotResponse import getResponse

app = Flask(__name__)
CORS(app)

@app.route("/send-message", methods = ["POST"])
def userMessage():
    message = request.json.get("message")
    response = {"message": str(getResponse(message))}
    return jsonify(response)

if __name__ == "__main__":
    app.run(host = "localhost", port = 8080)