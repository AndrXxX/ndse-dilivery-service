const sessionMiddleware = require('../middleware/api/session');
const authMiddleware = require('../middleware/socket/auth');
const passport = require("passport");
const onGetHistoryHandler = require("./socket/OnGetHistoryHandler")

const onDisconnect = (socket, id) => {
  socket.on('disconnect', () => {
    console.log(`Socket disconnected: ${id}`);
  });
}

module.exports = (io) => {
  io.use((socket, next) => sessionMiddleware(socket.request, {}, next));
  io.use((socket, next) => passport.initialize()(socket.request, {}, next));
  io.use((socket, next) => passport.session()(socket.request, {}, next));
  io.use(authMiddleware);

  io.on('connection', async (socket) => {
    const {id} = socket;
    console.log(`Socket connected: ${id}`);

    await onGetHistoryHandler(socket);

    onDisconnect(socket, id);
  });
};
