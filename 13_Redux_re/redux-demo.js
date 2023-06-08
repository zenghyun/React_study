const redux = require("@reduxjs/toolkit");

const initiateState = {
  counter: 0,
};

const counterReducer = (state = initiateState, action) => {
    switch(action.type) {
        case "increase": 
        return {
            counter : state.counter + 1,
        };
        case "decrease":
            return{
                counter: state.counter - 1,
            };
    }
};

const store = redux.configureStore({ reducer: counterReducer });

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increase" });
store.dispatch({ type: "decrease"});
