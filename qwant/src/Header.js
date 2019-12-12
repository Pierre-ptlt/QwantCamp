import React, {Component} from 'react';
import myImage from './images/logoQwant.jpg';
import myQoz from './images/Qoz-logo.svg';
import manifying from './images/magnifyingglass.svg';
import inconeproduit from './images/iconProduit.svg';
import './css/Header.css';

class Header extends Component{
    render() {
        return(
            <header>
                <div>
                    <div className="global_search">
                        <div className="search_bar">
                            <img className="search_logo" src={myImage}/>
                            <input placeholder="Search..." className="search_text" type="text"/>
                            <a className="link_magnifying" href="#">
                            <img className="magnifyingGlass" src={manifying}/>
                            </a>
                        </div>
                        <div className="search_options">
                         <img className="Qoz_options" src={myQoz}/>
                         <p className="divQoz"><input type="checkbox" id="test1"/>
                              <label htmlFor="test1">
                                 <span className="ui"></span>
                                </label>
                         </p>
                            <div className="menuProduit">
                                <a className="icone_produit" href="/">
                                    <img className="imgIconeProduit" src={inconeproduit}/>
                                    <span className="text_produit">Produits</span>
                                 </a>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div>
                     <nav className= "nav1_section">
                         <a href="/" className="link_section">Web</a>
                         <a href="/" className="link_section">Actualités</a>
                         <a href="/" className="link_section">Images</a>
                         <a href="/" className="link_section">Shopping</a>
                         <a href="/" className="link_section">Social</a>
                         <a href="/" className="link_section">Vidéos</a>
                         <a href="/" className="link_section">Maps</a>
                     </nav>
                        <nav className="nav2_section">
                            <a href="/" className="link_section">Plus</a>
                            <a href="/" className="link_section">À propos</a>
                            <a href="/" className="link_section">Maps</a>
                        </nav>
                 </div>
                </div>
                <br/>
                <br/>
                <hr/>
                <br/>
                <br/>
            </header>
        );
    }
}

export default Header;

