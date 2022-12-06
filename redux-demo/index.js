const cakeActions = require("./reducers/cake/actions");
const iceCreamActions = require("./reducers/iceCream/actions");
const store = require("./store");

console.log("initial state", store.getState());

// subscribe listeners
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

// perform actions
cakeActions.orderCake();
cakeActions.orderCake();
cakeActions.orderCake();
cakeActions.restockCake(3);

iceCreamActions.orderIceCream();
iceCreamActions.orderIceCream();
iceCreamActions.restockIceCream();
iceCreamActions.orderIceCream(3);

// unsubscribe listeners
unsubscribe();
