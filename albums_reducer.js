// albums_reducer.js
// Creating a Reducer
const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ALBUM": {
      // => Ask yourself: what is action.payload?
      return [...state, action.payload];
    }
    case "REMOVE_ALBUM": {
      const remove = state.filter((title) => {
        return title.title !== action.payload;
      });
      return remove;
    }
    default: {
      return state;
    }
  }
}

module.exports = { reducer };
