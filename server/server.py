
class Server(object):
    def __init__(self, db, schema):
        self.db = db
        self.schema = schema

    def find_all(self):
        items = self.db.find_all()
        return [self.dump(item) for item in items]

    def find_one(self, selector):

        items = self.db.find_one(selector)
        return [self.dump(item) for item in items]

    def update_one(self, author, title, publisher, isbn):
        selector = {
            'author.lastName': author,
            'title': title,
            'publishedBy': publisher
        }
        updatedValue = {
            'isbn': isbn
        }
        updatedItem = self.db.update_one(self, selector, updatedValue)
        return updatedItem

    def dump(self, data):
        return self.schema.dump(data)
