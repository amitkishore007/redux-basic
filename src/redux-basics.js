const redux = require('redux');

const createStore = redux.createStore;

// initial State
const initialState = {
    counter: 1
};

// reducer
const reducer = (state = initialState, action) => {

    if(action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
}

// store
const store = createStore(reducer);


store.subscribe(() => {
    console.log('[Store Subscription]', store.getState());
    
});


// action dispatcher
store.dispatch({ type: 'ADD', value: 1});
store.dispatch({ type: 'ADD', value: 3});

