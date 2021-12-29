const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const flash = require('express-flash');

const suscriptionsRoute = require('./routes/suscriptions');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'upYwQkT3zyTAZdd2uMLySO7u4mpdqq',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1800000 },
  }),
);
app.use(flash());

app.use('/suscriptions', suscriptionsRoute);

app.use((_, res) => {
  res.status(404).send('Sorry cant find that!');
});

module.exports = app;
