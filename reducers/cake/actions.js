const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;
const types = require("./types");
const store = require("../../store");

const orderCake = (quantity = 1) => ({
  type: types.CAKE_ORDERED,
  payload: quantity,
});

const restockCake = (quantity = 1) => ({
  type: types.CAKE_RESTOCKED,
  payload: quantity,
});

module.exports = bindActionCreators(
  { orderCake, restockCake },
  store.dispatch
);
