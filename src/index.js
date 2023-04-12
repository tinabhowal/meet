import React from 'react';

import ReactDOM from 'react-dom';
import * as atatus from 'atatus-spa';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
atatus.config('0a92904c5c7c4fd48123888288f69361').install();


const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

//serviceWorkerRegistration.unregister();

serviceWorkerRegistration.register();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// atatus.notify(new Error('Test Atatus Setup'));
