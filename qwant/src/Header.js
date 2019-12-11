import React, {Component} from 'react';
import myImage from './images/logoQwant.jpg'
import myQoz from './images/Qoz-logo.svg'
import './css/Header.css';

class Header extends Component{
    render() {
        return(
            <header>
                <div className="global_search">
                    <div className="search_bar">
                        <img className="search_logo" src={myImage}/>
                        <input placeholder="Search..." className="search_text" type="text"/>
                    </div>
                    <div className="search_options">
                        <img className="Qoz_options" src={myQoz}/>
                        <p className="divQoz"><input type="checkbox" id="test1"/>
                            <label htmlFor="test1">
                                <span className="ui"></span>
                            </label>
                        </p>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;

