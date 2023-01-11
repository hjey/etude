const express = require('express');
const router = express.Router();
const app = express();
const User = require('./user.js');
// const User = require('./student.js');

app.engine('views', __dirname + '/views');
app.set('view engine', 'ejs');

router.get('/', (req, res) => {
  res.render('main');
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/:name', (req, res) => {
  User.find({ name: req.params.name }, (err, user) => {
    res.render('main', { user: user } );
  });
});

module.exports = router;