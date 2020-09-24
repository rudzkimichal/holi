
import requests
from flask import Flask, json
from flask_cors import CORS
from pymongo import MongoClient, TEXT
from ..server.server import Server
from ..server.db import Database
from ..server.db.mongo import MongoDb
from ..server.db.bn import BnRepo
from ..server.db.schema import MongoSchema, responseSchema

app = Flask(__name__)
CORS(app)


@app.route('/all', methods=['GET'])
def index():
    return json_response(Server(Database(MongoDb()), MongoSchema()).find_all())


@app.route('/bn/<string:author>/<string:title>/<string:publisher>', methods=['GET'])
def getData(author, title, publisher):
    bn = BnRepo()
    return json_response(bn.find_one(author,title,publisher))

@app.route('/all/<string:author>/<string:title>/<string:publisher>', methods=['GET'])
def getItem(author, title, publisher):
    selector = {
        'author.lastName': author,
        'title': title,
        'publishedBy': publisher
    }
    return json_response(Server(Database(MongoDb()), MongoSchema()).find_one(selector))


def json_response(payload, status=200):
    return (json.dumps(payload), status, {'content-type': 'application/json'})
