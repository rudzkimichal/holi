
import requests

class BnRepo(object):
    def __init__(self, url = 'http://data.bn.org.pl/api/bibs.json?kind=książka&limit=100'):
        self.url = url


    def find_one(self,author,title,publisher):
        self.url += f'&author={author}&title={title}&publisher={publisher}'
        self.client = requests.get(
        self.url,
        headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': '*/*'
        })
        items = self.client.text
        return items
