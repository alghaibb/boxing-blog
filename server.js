const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars helpers
const hbs = handlebars.create({ /* Your helpers */ });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Session middleware
app.use(session({
  secret: 'super secret secret',
  resave: false,
  saveUninitialized: true,
}));

// Handlebars middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Routes
// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT http://localhost:${PORT}`));
});
