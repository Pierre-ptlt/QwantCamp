import React from 'react';
import Header from './Header';
import QwantNewsApp from './APIconfig';
import './App.css';



function App() {
    return(
        <div>
                <div className="div-left">
                    <QwantNewsApp/>
                </div>
            <QwantNewsApp />
            <QwantNewsApp/>
        </div>
    );
}

export default App;
