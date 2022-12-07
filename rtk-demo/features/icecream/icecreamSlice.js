const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => void state.numOfIcecreams--,
    restocked: (state, action) => void (state.numOfIcecreams += action.payload),
  },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => void state.numOfIcecreams--)
    },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
