
const express = require('express');
const router = express.Router();
const Item = require('./db.model.js');
const app = express();

module.exports = router.route('/all')
  .get(async (req, resp) => {
    let items = await Item.find({});
    return resp.status(200).send(items);
  });


app.use('/api',router);
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
