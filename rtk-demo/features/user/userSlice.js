const { fetchUsersApi, fetchUsersErrorApi } = require("./userApi");

const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
  status: "idle",
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk("user/fetchUser", fetchUsersApi);

// const fetchUsers = createAsyncThunk(
//   "user/fetchUser",
//   (_, { fulfillWithValue }) =>
//     fetchUsersApi().then((users) =>
//       fulfillWithValue({
//         status: 200,
//         data: users,
//       })
//     )
// );

// const fetchUsers = createAsyncThunk(
//   "user/fetchUser",
//   (_, { rejectWithValue }) =>
//     fetchUsersErrorApi().catch((error) =>
//       rejectWithValue({
//         status: 400,
//         message: error,
//       })
//     )
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builer) => {
    builer.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
      state.error = "";
    });
    builer.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "idle";
      state.error = "";
      state.users = action.payload;
    });
    builer.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
      console.log(action.payload);
    });
  },
});

module.exports = userSlice.reducer;
module.exports.userActions = userSlice.actions;
module.exports.fetchUsers = fetchUsers;
