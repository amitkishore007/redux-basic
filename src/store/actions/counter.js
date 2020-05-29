import * as actionType from'./actionType';


export const increment = (payload) => {
    return {
        type: actionType.INCREMENT_VALUE,
        payload: payload
    }
}

export const decrement = (payload) => {
    return {
        type: actionType.DECREMENT_VALUE,
        payload: payload
    }
}