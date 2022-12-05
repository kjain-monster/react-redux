const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;
const types = require("./types");
const store = require("../../store");

const orderIceCream = (quantity = 1) => ({
  type: types.ICECREAM_ORDERED,
  payload: quantity,
});

const restockIceCream = (quantity = 1) => ({
  type: types.ICECREAM_RESTOCKED,
  payload: quantity,
});

module.exports = bindActionCreators(
  { orderIceCream, restockIceCream },
  store.dispatch
);
