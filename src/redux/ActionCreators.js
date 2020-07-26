import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addReview = review => ({
    type: ActionTypes.ADD_REVIEW,
    payload: review
});

export const postReview = (enteryId, rating, author, text) => dispatch => {
    
    const newReview = {
        enteryId: enteryId,
        rating: rating,
        author: author,
        text: text
    };
    newReview.date = new Date().toISOString();

    return fetch(baseUrl + 'reviews', {
            method: "POST",
            body: JSON.stringify(newReview),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addReview(response)))
        .catch(error => {
            console.log('post review', error.message);
            alert('Your review could not be posted\nError: ' + error.message);
        });
};
//redux thunk middleware syntax to intercept dispatch
export const fetchEnteries = () => dispatch => {
    dispatch(enteriesLoading());

    return fetch(baseUrl + 'enteries')
    .then(response => {
            if (response.ok) {
                 return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(enteries => dispatch(addEnteries(enteries)))
    .catch(error => dispatch(enteriesFailed(error.message)));
};

export const enteriesLoading = () => ({
    type: ActionTypes.ENTERIES_LOADING
});

export const enteriesFailed = errMess => ({
    type: ActionTypes.ENTERIES_FAILED,
    payload: errMess
});

export const addEnteries = enteries => ({
    type: ActionTypes.ADD_ENTERIES,
    payload: enteries
});

export const fetchReviews = () => dispatch => {    
    return fetch(baseUrl + 'reviews')
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                error.response = response;
                throw error;
            }
        },
        error => {
            var errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(reviews => dispatch(addReviews(reviews)))
    .catch(error => dispatch(reviewsFailed(error.message)));
};

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});

export const addReviews = reviews => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

export const fetchSpecials = () => (dispatch) => {
    
    dispatch(specialsLoading());

    return fetch(baseUrl + 'specials')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(specials => dispatch(addSpecials(specials)))
        .catch(error => dispatch(specialsFailed(error.message)));
};

export const specialsLoading = () => ({
    type: ActionTypes.SPECIALS_LOADING
});

export const specialsFailed = errMess => ({
    type: ActionTypes.SPECIALS_FAILED,
    payload: errMess
});

export const addSpecials = specials => ({
    type: ActionTypes.ADD_SPECIALS,
    payload: specials
});

//
export const fetchServices = () => (dispatch) => {
    
    dispatch(servicesLoading());

    return fetch(baseUrl + 'services')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(services => dispatch(addServices(services)))
        .catch(error => dispatch(servicesFailed(error.message)));
};

export const servicesLoading = () => ({
    type: ActionTypes.SERVICES_LOADING
});

export const servicesFailed = errMess => ({
    type: ActionTypes.SERVICES_FAILED,
    payload: errMess
});

export const addServices = services => ({
    type: ActionTypes.ADD_SERVICES,
    payload: services
});

//
export const postFeedback = (feedback) => () => {


    return fetch(baseUrl + 'feedback', {
            method: "POST",
            body: JSON.stringify(feedback),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => { 
            alert("Thank you for your feedback " + JSON.stringify(response))
        })
        .catch(error => {
            console.log('post feedback', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message);
        });
};

export const postReserve = (reserveinfo) => () => {


    return fetch(baseUrl + 'reserveinfo', {
            method: "POST",
            body: JSON.stringify(reserveinfo),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => { 
            alert("Thank you for your reserve info " + JSON.stringify(response))
        })
        .catch(error => {
            console.log('post reserve info', error.message);
            alert('Your reserve info could not be posted\nError: ' + error.message);
        });
};


