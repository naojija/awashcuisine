import * as ActionTypes from './ActionTypes';
export const Specials = (state = { isLoading: true,
                                        errMess: null,
                                        specials: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SPECIALS:
            return {...state, isLoading: false, errMess: null, specials: action.payload};

        case ActionTypes.SPECIALS_LOADING:
            return {...state, isLoading: true, errMess: null, specials: []}

        case ActionTypes.SPECIALS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
            
        default:
          return state;
      }
};