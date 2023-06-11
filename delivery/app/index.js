const express = require('express');
const passport = require('passport');
const { Server } = require("socket.io");

const apiRouter = require('./routes/api');

const mongoose = require('mongoose');
const { port, dbUrl } = require('./config');
const uploadDirAccessor = require('./utils/UploadDirAccessor');
const auth = require('./boot/auth');
const error404Middleware = require("./middleware/api/404");
const sessionMiddleware = require('./middleware/api/session');
// const bootSocket = require('./boot/socket');

const app = express();
auth();

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
uploadDirAccessor.createUploadDirs();

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
