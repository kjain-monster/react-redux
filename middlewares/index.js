const { applyMiddleware } = require("redux");
const logger = require("./logger");

const middlewares = [logger];

module.exports = applyMiddleware(...middlewares);
