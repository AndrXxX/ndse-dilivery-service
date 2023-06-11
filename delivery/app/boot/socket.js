const commentsStore = require("../store/CommentsStore");
const sessionMiddleware = require('../middleware/api/session');
const authMiddleware = require('../middleware/socket/auth');
const passport = require("passport");

const onLoadBookDiscussion = async (socket, bookId) => {
  const comments = await commentsStore.getComments(5, { refTypeId: bookId});
  comments && socket.emit('load-book-discussion', comments);
}

const onBookDiscussion = async (socket) => {
  // const { user } = socket.handshake.query;
  const { user } = socket.request;
  // await onLoadBookDiscussion(socket, bookId);
  //
  // console.log(`Socket bookId: ${bookId}`);
  // socket.join(bookId);
  // socket.on('book-discussion', async (msg) => {
  //   const comment = await commentsStore.create(msg);
  //   if (comment) {
  //     socket.to(bookId).emit('book-discussion', comment);
  //     socket.emit('book-discussion', comment);
  //   }
  // });
}

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

    // await onBookDiscussion(socket);
    onDisconnect(socket, id);
  });
};
