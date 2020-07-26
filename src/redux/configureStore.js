import { Enteries } from './enteries';
import { Reviews } from './reviews';
import { Services } from './services';
import { Specials } from './specials';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback, InitialReserveState, InitialLoginState } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            enteries: Enteries,
            reviews: Reviews,
            services: Services,
            specials: Specials,
            ...createForms({
                feedbackForm: InitialFeedback
            }),
            ...createForms({
                reserveForm: InitialReserveState
            }),
            ...createForms({
                loginForm: InitialLoginState
            })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}