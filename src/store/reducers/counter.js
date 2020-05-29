import * as actionTypes from '../actions/actionType';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_VALUE:
                return {
                    ...state,
                    counter: state.counter + action.payload
                }
        case actionTypes.DECREMENT_VALUE: 
                return {
                    ...state,
                    counter: state.counter - action.payload
                }
        default:
            return state;
    }
}

export default reducer;