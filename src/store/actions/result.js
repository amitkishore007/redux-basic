import * as actionType from './actionType';

export const storeResult = (payload) => {
    return {
        type: actionType.STORE_RESULT,
        payload: payload
    }
}

export const removeResult = (id) => {
    return {
        type: actionType.REMOVE_RESULT,
        payload: id
    }
}