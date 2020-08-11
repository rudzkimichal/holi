
from .db.mongo import MongoDb
from .db.schema import MongoSchema

class Server(object):
    def __init__(self, client = MongoDb(), schema = MongoSchema()):
        self.client = client
        self.schema = schema

    def find_all(self):
        items = self.client.find_all_books({})
        return [self.dump(item) for item in items]

    def dump(self, data):
        return self.schema.dump(data)
