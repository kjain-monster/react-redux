const types = require("./types");
const initialCakeState = require("./state");

module.exports = (state = initialCakeState, action) => {
    switch (action.type) {
      case types.CAKE_ORDERED:
        return {
          ...state,
          numOfCakes:
            state.numOfCakes - action.payload < 0
              ? 0
              : state.numOfCakes - action.payload,
        };
      case types.CAKE_RESTOCKED:
        return {
          ...state,
          numOfCakes: state.numOfCakes + action.payload,
        };
      default:
        return state;
    }
  };