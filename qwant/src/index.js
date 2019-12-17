//Import des dépendances
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import QwantNewsApp from './APIconfig';
import * as serviceWorker from './serviceWorker';
import Header from "./Header";

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<QwantNewsApp/>, document.getElementById("body"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
