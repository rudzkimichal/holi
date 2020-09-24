
from pymongo import MongoClient, ReadPreference
import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

def iterate(object, key):
    for k, v in object.items():
        if k == key:
            return v


url = os.getenv('MONGO_URL')
client = MongoClient(url)
db = client.books
collection = db.holi
test = db.test
result = test.find({'isbn':''})
i = 0

for item in result:
    print(i)
    i = i + 1
    print(item)

# for item in result:
#     print(i)
#
#     author = ''
#     title = ''
#     publisher = ''
#     isbn = ''
#
#     for k, v in item.items():
#         if(k == 'author'):
#             for k,v in v.items():
#                 author += f'{v} '
#         if(k == 'title'):
#             title = v
#         if(k == 'publishedBy'):
#             publisher = v
#
#     data = requests.get('https://data.bn.org.pl/api/bibs.json', params = {'publisher': publisher,'title': title})
#     json_data = json.loads(data.text)
#
#     for k, v in json_data.items():
#         if(k == 'bibs' and v != []):
#             for items in v:
#                 for k, v in items.items():
#                     if(k == 'isbnIssn' and len(v) != 0):
#                         isbn = v
#                         break
#
#     test.find_one_and_update(item, {'$set': {'isbn': isbn} })
#     i = i + 1
