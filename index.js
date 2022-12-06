const redux = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequested = () => ({
  type: FETCH_USERS_REQUESTED,
});

const fetchUsersSucceeded = (users = []) => ({
  type: FETCH_USERS_REQUESTED,
  payload: users,
});

const fetchUsersFailed = (error) => ({
  type: FETCH_USERS_FAILED,
  payload: error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequested());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSucceeded(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUsers());
