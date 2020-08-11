
from marshmallow import Schema, fields

AuthorSchema = Schema.from_dict({'firstName': fields.Str(), 'lastName': fields.Str()})

class MongoSchema(Schema):

    published_by = fields.Str()
    author = fields.Nested(AuthorSchema)
    title = fields.Str()
    vol = fields.Str()
    comments = fields.Str()
    location = fields.Str()
    isbn = fields.Str()
    year_published = fields.Str()
    image_url = fields.URL()
    desc = fields.Str()
