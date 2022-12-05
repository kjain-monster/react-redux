const redux = require("redux");
const createStore = redux.createStore;

const middlewares = require("./middlewares");
const rootReducer = require("./reducers");

module.exports = createStore(rootReducer, middlewares);