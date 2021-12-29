/* eslint-disable object-shorthand */
module.exports = {
  normalizePort: function (val) {
    const port = Number(val);

    if (Number.isNaN(port)) return val;

    if (port >= 0) return port;

    return false;
  },
};
