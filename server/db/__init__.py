
class Database(object):
    def __init__(self, adapter = None):
        self.client = adapter

    def find_all(self):
        return self.client.find_all()

    def find_one(self, selector):

        return self.client.find_one(selector)

    def update_one(self, selector, updatedValue):
        return self.client.replace_one(selector, updatedValue)
