import * as actionType from'./actionType';


export const incrementValue = (payload) => {
    return {
        type: actionType.INCREMENT_VALUE,
        payload: payload
    };
}

export const increment = (payload) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(incrementValue(payload))
        }, 2000);
    }
}

export const decrement = (payload) => {
    return {
        type: actionType.DECREMENT_VALUE,
        payload: payload
    }
}