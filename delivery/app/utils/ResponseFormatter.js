module.exports = {
  error(error) {
    return {
      "error": error,
      "status": "error"
    };
  },
  ok(data) {
    return {
      "data": data,
      "status": "ok"
    };
  }
};
