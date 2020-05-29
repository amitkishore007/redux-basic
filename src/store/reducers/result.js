import * as actionTypes from '../actions/actionType';

const initialState = {
    result: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
                return {
                    ...state,
                    result: [...state.result, {id: Math.floor(Math.random() * 5 *1000), value: action.payload}]
                }
        case actionTypes.REMOVE_RESULT: 
                return {
                    ...state,
                    result: state.result.filter((r) => r.id !== action.payload)
                }
        default:
            return state;
    }
}

export default reducer;