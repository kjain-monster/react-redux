const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

// action types
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// actions
const orderCake = (quantity = 1) => ({
  type: CAKE_ORDERED,
  payload: quantity,
});

const restockCake = (quantity = 1) => ({
  type: CAKE_RESTOCKED,
  payload: quantity,
});

// state
const initialState = {
  numOfCakes: 10,
};

// reducer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes:
          state.numOfCakes - action.payload < 0
            ? 0
            : state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(cakeReducer);

console.log("initial state", store.getState());

// subscribe listeners
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

// dispatch actions
// store.dispatch(orderCake());
// store.dispatch(restockCake());
// store.dispatch(orderCake(2));
// store.dispatch(restockCake(8));
// store.dispatch(orderCake(2));
// store.dispatch(orderCake(4));

// bind all actions into a single object
const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

// unsubscribe listeners
unsubscribe();
