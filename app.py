from flask import Flask, render_template
import pymongo
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__, template_folder='client')

@app.route('/')
def index():
    api_key = os.environ.get('MONGO_URL')
    client = pymongo.MongoClient(api_key)
    db = client.books
    db = db.test
    data = db.find()
    print(os.environ['MONGO_URL'])

    for item in data:
        print(item)
        return render_template('index.html', message = item)

if __name__ == '__main__':
    app.debug = True
    app.run()
