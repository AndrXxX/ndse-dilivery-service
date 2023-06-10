const express = require('express');
const expressSession = require('express-session');
const passport = require('passport');
const { Server } = require("socket.io");

const apiRouter = require('./routes/api');

const mongoose = require('mongoose');
const { cookieSecret, port, dbUrl } = require('./config');
const auth = require('./boot/auth');
const error404Middleware = require("./middleware/api/404");
// const bootSocket = require('./boot/socket');

const app = express();
auth();

app.use(expressSession({
  secret: cookieSecret,
  resave: false,
  saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', apiRouter);
app.use(error404Middleware);

try {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  const server = app.listen(port);
  new Server(server);
  // bootSocket(new Server(server));
} catch (e) {
  console.error(e);
}
