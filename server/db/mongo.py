
import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

class MongoDb(object):
    def __init__(self):
        self.mongo_url = os.getenv('MONGO_URL')
        self.client = MongoClient(self.mongo_url)

    def find_all(self):
        return self.client.books.holi.find()

    def find_one(self, selector):
        return self.client.books.holi.find(selector)

    def update_one(self, selector, updatedValue):
        return self.client.books.holi.replace_one(selector, updatedValue).modified_count
