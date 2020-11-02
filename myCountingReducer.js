// myCountingReducer.js
const initialState = 0;

function myCountingReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "SUBTRACT": {
      return state - action.payload;
    }
    case "RESET": {
      return initialState;
    }
    case "MULTIPLY": {
      return state * action.payload;
    }
    default: {
      return state;
    }
  }
}

module.exports = myCountingReducer;

// predict: Initial state
console.log(myCountingReducer(undefined, {}));

// predict: 5
console.log(myCountingReducer(0, { type: "ADD", payload: 5 }));

// predict: 15, 20 no look the initial state when you are calling the function
console.log(myCountingReducer(10, { type: "ADD", payload: 10 }));

// predict: 25, same as before 20
console.log(myCountingReducer(10, { type: "ADD", payload: 10 }));
