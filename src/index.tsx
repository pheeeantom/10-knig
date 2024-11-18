import React from 'react';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store';

export const store = setupStore();

const root = createRoot(document.getElementById('root')!);

// Первый рендер приложения
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>  
    </BrowserRouter>
);