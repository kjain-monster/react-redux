const types = require("./types");
const initialIceCreamState = require("./state");

module.exports = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case types.ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams:
          state.numOfIceCreams - action.payload < 0
            ? 0
            : state.numOfIceCreams - action.payload,
      };
    case types.ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};
;