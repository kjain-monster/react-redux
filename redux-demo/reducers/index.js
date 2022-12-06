const redux = require("redux");
const combineReducers = redux.combineReducers;
const cakeReducer = require("./cake");
const iceCreamReducer = require("./iceCream");

module.exports = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
