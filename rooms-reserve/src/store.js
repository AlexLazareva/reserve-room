import { createStore, applyMiddleware, compose } from 'redux';

function _applyMiddleware() {
    const middleware = [

    ];

    return applyMiddleware(...middleware);
}

export default function configureStore(initialState) {
    const store = compose(
        _applyMiddleware()
    )(createStore)(rootReducer, initialState);

    return store;
}
