const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREAMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREAMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const count = store.getState();
  console.log(count);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREAMENT" });
store.dispatch({ type: "DECREAMENT" });
