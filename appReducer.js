// appReducer.js
const initialState = {
  user: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGOUT": {
      return {
        ...state,
        user: null,
      };
    }
    case "LOGIN": {
      //Action payload it's the action that is gonna be defined when calling in this case login
      return {
        ...state,
        user: action.payload,
      };
    }
    case "UPDATE_LOGGEDIN_USER": {
      // => Ask yourself: what is action.payload?
      // undefined
      if (!state.user) {
        // Not currently logged in,
        //  so this doesn't make sense
        return state;
      }
      return {
        ...state,
        user: {
          // Copy over all current user info,
          ...state.user,
          // and then add updates
          ...action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}

module.exports = { reducer };
