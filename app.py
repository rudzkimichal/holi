from flask import Flask, generate_template

app = Flask(__name__)

@app.route('/')
def index():
    return generate_template('index.html')
