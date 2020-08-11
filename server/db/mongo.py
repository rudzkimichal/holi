
import os
from dotenv import load_dotenv
from pymongo import MongoClient
load_dotenv()

class MongoDb(object):
    def __init__(self):
        self.mongo_url = os.getenv('MONGO_URL')
        self.client = MongoClient(self.mongo_url)

    def find_all_books(self, selector):
        return self.client.books.holi.find(selector)
