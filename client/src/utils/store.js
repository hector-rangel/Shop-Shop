import { createStore } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState);

    return store;
}