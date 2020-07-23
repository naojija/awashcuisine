import * as ActionTypes from './ActionTypes';

export const Enteries = (state = {
    isLoading: true,
    errMess: null,
    enteries: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_ENTERIES:
        return {...state, isLoading: false, errMess: null, enteries: action.payload};
    case ActionTypes.ENTERIES_LOADING:
        return {...state, isLoading: true, errMess: null, enteries: []};
    case ActionTypes.ENTERIES_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};