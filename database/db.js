
const _ = require('lodash');

module.exports = (app) => {

  _db = [];

  app.get('/db', (req, resp) => {
    resp.send(_db);
  });

  app.get('/db/:id', (req, resp) => {
    resp.send(
      _.find(
        _db, {id: req.params.id}
      )
    );
  });

  app.post('/db', (req, resp) => {
    _db.push(req.body);
    resp.json({info: 'Item added'});
  });

  app.put('/db/:id', (req, resp) => {
    const index = _.findIndex(_db, {id: req.params.id});
    _.merge(_db[index], req.body);

    resp.json({info: 'Item updated'});
  });

  app.delete('/db/:id', (req, resp) => {
    _.remove(_db, item => item.id === req.params.id);

    resp.json({info: 'Item deleted'});
  });
}
