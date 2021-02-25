from flask import Flask, render_template
import pymongo
import os

app = Flask(__name__, template_folder='client')

@app.route('/')
def index():
    client = pymongo.MongoClient('mongodb+srv://admin:6YMxZYttw6RaTK1t@books.eicd4.mongodb.net/books?retryWrites=true&w=majority')
    db = client.books
    db = db.test
    data = db.find()
    print(os.environ)

    for item in data:
        # print(item)
        return render_template('index.html', message = item)

if __name__ == '__main__':
    app.debug = True
    app.run()
