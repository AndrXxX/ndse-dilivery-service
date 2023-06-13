module.exports =  (socket, next) => {
  socket.request.user ? next() : next(new Error("Unauthorized"));
};
