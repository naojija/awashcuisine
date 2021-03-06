import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-lobster';
import 'typeface-open-sans';
import App from './App';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
//import ExampleParentComponent from './Demo'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
//for demo purpose use the below one
ReactDOM.render(
  <React.StrictMode>
    <ExampleParentComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
