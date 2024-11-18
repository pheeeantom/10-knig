import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { booksAPI } from './services/books';
import booksReducer from './reducers/books';

export const setupStore = () => {
    const store = configureStore({
        reducer: {
            booksReducer,
            [booksAPI.reducerPath]: booksAPI.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(booksAPI.middleware)
    });

    setupListeners(store.dispatch);

    return store;
}