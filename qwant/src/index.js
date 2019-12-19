//Import des dépendances
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
=======


ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<QwantNewsApp/>, document.getElementById("body"));
//ReactDOM.render(<FavoriteBar/>, document.getElementById("left-body"));
>>>>>>> 22f6c78e74e22c3c6a3fa82b0c48cc6fa4ee8aab

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
