const redux = require("redux");
const createStore = redux.createStore;
const rootReducer = require("./reducers");

module.exports = createStore(rootReducer);