
from flask import Flask, request, json
from flask_cors import CORS
from ..server.server import Server
from ..server.db.schema import MongoSchema

app = Flask(__name__)
CORS(app)

@app.route('/books', methods=['GET'])
def show_all():
    return json_response(Server().find_all())

def json_response(payload, status=200):
    return (json.dumps(payload), status, {'content-type': 'application/json'})
