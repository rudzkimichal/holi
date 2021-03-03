from flask import Flask
import pymongo
from dotenv import load_dotenv
import json
import os
from marshmallow import Schema, fields

load_dotenv()

app = Flask(__name__)
db_uri = os.environ.get('DB_URI')
client = pymongo.MongoClient(db_uri)
db = client.books
coll = db.test

class AuthorSchema(Schema):
    firstName: fields.Str()
    lastName: fields.Str()

class DbSchema(Schema):
    title: fields.Str()
    author: fields.Nested(AuthorSchema())

@app.route('/', methods = ['GET'])
def get_all():
    data = coll.find()
    data = list(data)
    schema = DbSchema()
    data_json = schema.dump(data)

    return data_json

if __name__ == '__main__':
    app.debug = True
    app.run()
