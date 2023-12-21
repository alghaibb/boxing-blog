const express = require('express');
const session = require('express-session');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const handlebars = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars helpers
const hbs = handlebars.create({ helpers });

// Session middleware
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    maxAge: 5 * 60 * 1000, // 5 minutes in milliseconds
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
    sameSite: 'lax',
  },
  store: new SequelizeStore({
    db: sequelize
  })
};

// Use session middleware with the defined configuration
app.use(session(sess));


// Handlebars middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT http://locahost:${PORT}`));
});
