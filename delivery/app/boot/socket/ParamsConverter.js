module.exports = {
  convert (params) {
    if (typeof params === "string") {
      params = JSON.parse(params);
    }
    if (typeof params !== "object") {
      params = {};
    }
    return params;
  }
}
