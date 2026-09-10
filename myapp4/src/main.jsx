import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // The Provider broadcasts the store to every component inside <App />
  <Provider store={store}>
    <App />
  </Provider>
);

//Steps to create a new React app using Vite and install Redux Toolkit and React Redux:
// npm create vite@latest myapp4
// cd myapp4
// npm install
// React redux:
//  npm install @reduxjs/toolkit react-redux
