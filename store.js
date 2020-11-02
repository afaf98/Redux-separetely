// store.js
const { createStore } = require("redux");
const reducer = require("./myCountingReducer");

const store = createStore(reducer);
console.log("Initial state of the store:", store.getState());

store.subscribe(() => {
  console.log("the state just changed to:", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

store.dispatch({
  type: "ADD",
  payload: 10,
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

store.dispatch({
  type: "SUBTRACT",
  payload: 5,
});
store.dispatch({
  type: "SUBTRACT",
  payload: 10,
});
store.dispatch({
  type: "SUBTRACT",
  payload: 10,
});

console.log("final state:", store.getState());
