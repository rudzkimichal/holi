from flask import Flask, jsonify
import pymongo
from dotenv import load_dotenv
import os
from bson import json_util
import json

load_dotenv()

app = Flask(__name__)
db_uri = os.environ.get('DB_URI')
client = pymongo.MongoClient(db_uri)

@app.route('/', methods = ['GET'])
def get_all():
    data = client.books.test.find()
    items = jsonify(json.loads(json_util.dumps(data)))

    return items

if __name__ == '__main__':
    app.debug = True
    app.run()
