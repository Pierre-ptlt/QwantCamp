import React from 'react';
import Header from './Header';
import QwantNewsApp from './APIconfig';
import './App.css';
import FavoriteBar from "./FavoriteBar";


function App() {
    return(
        <div>
            <Header/>
            <FavoriteBar/>
        </div>

    );
}

export default App;

