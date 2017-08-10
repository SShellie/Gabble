  const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const routes = require('./routes');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// connects to css in the public folder.

app.use(express.static('public'));

app.use(session({
  secret: 'common sorcery',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(routes);


app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), function() {
  console.log('app is running on port', app.get('port'));
});
