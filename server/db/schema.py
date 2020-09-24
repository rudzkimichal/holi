
from marshmallow import Schema, fields

class MongoSchema(Schema):

    publishedBy = fields.Str()
    author = fields.Dict(firstName = fields.Str(), lastName = fields.Str())
    title = fields.Str()
    vol = fields.Str()
    comments = fields.Str()
    location = fields.Str()
    isbn = fields.Str()
    yearPublished = fields.Str()
    imageUrl = fields.URL()
    desc = fields.Str()

responseSchema = {
    '_id': 0,
    'author': 1,
    'title': 1,
    'publishedBy': 1,
    'isbn': 1
}
