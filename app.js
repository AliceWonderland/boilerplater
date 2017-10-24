// CLIENT ENTRY FILE

import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './client/store/';
import './client/index.scss';

console.log('Alice Test',store);

ReactDOM.render(
  <Provider store={store}>
    {/* rest of your app goes here! */}
    <Router>
      <div className="container">
        <h1>Hello, World!</h1>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app') //the id of the div in your index.html
);

//
//
// ReactDOM.render(
// <Provider store={store}>
//   {/* rest of your app goes here! */}
//   </Provider>,
//   document.getElementById('yourApp')
// );