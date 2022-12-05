const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

const UPDATE_CITY = "UPDATE_CITY";

const updateCity = (city) => ({
  type: UPDATE_CITY,
  payload: city,
});

const initialState = {
  name: { first: "Kanha", last: "Jain" },
  address: { city: "Noida", pinCode: 201310, state: "Uttar Pradesh" },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CITY: {
      /**
       * Instead writing below code
       */
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       city: action.payload,
      //     },
      //   };

      /**
       * Write below code
       */
      return produce(state, (draft) => {
        draft.address.city = action.payload;
      });
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("update state", store.getState());
});

store.dispatch(updateCity("Greater Noida"));

unsubscribe();
