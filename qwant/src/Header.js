import React, {Component} from 'react';
import myImage from './images/logoQwant.jpg';
import myQoz from './images/Qoz-logo.svg';
import manifying from './images/magnifyingglass.svg';
import inconeproduit from './images/iconProduit.svg';
import iconeQwant from './images/icon-qwant.svg';
import iconeCauses from './images/icon-causes.svg';
import iconeMaps from './images/icon-maps.svg';
import iconeJunior from './images/icon-junior.svg';
import iconeMusique from './images/icon-music.svg';
import questionMark from './images/question-mark.svg';
import './css/Header.css';

function InputChecked() {
    return(
        <div className="divNotPopQoz">
            <label>Qoz est désactivé</label>
        </div>
    );
}

function InputUnChecked() {
    return(
        <div className="divPopQoz">
            <label>Qoz est activé</label>
        </div>
    );
}


class Header extends Component{

    constructor() {
        super();
        this.state = {isChecked: true};
        this.handleCheckboxChecked = this.handleCheckboxChecked.bind(this);
    }

    handleCheckboxChecked() {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {

        let txt;
        if (this.state.isChecked) {

            setTimeout(() => {
                txt = <InputUnChecked/>;
            }, 3000);
        }
        else {
            setTimeout(() => {
                txt = <InputChecked/>;
            }, 3000);
        }

        return(
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
                         <p className="divQoz">
                             <label className="switch">
                                 <input name="checkbox" type="checkbox" checked={this.state.isChecked} onChange={this.handleCheckboxChecked} />
                                     <span className="slider round"></span>
                             </label>
                             <button className="btnQuestion">
                                 <a href="https://www.qwant.com/causes/fr_fr/reports?display=all_assos" target="_blank">
                                 <img className="questionMark" src={questionMark}/>
                                 </a>
                             </button>
                         </p>
                        <div className="menuProduit">
                            <div className="dropdown">
                                <button className="dropbtn1"><img className="imgIconeProduit" src={inconeproduit}/></button>
                                <div className="dropdown-content">
                                    <table>
                                        <tr>
                                            <td><a className="link_spec_produit" href="/"><img src={iconeQwant}/><span className="spec_produit">Qwant</span></a></td>
                                            <td><a className="link_spec_produit" href="/"><img src={iconeJunior}/><span className="spec_produit">Junior</span></a></td>
                                        </tr>
                                        <tr>
                                            <td><a className="link_spec_produit" href="/"><img src={iconeMaps}/><span className="spec_produit">Maps</span></a></td>
                                            <td><a className="link_spec_produit" href="/"><img src={iconeMusique}/><span className="spec_produit">Music</span></a></td>
                                        </tr>
                                        <tr>
                                            <td><a className="link_spec_produit" href="/"><img src={iconeCauses}/><span className="spec_produit">Causes</span></a></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <span className="text_produit">Produits</span>
                        </div>
                    </div>
                </div>
                <div className="second">
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
                        <div className="dropdown">
                            <button className="dropbtn"><p className="link_section">Plus</p></button>
                            <div className="dropdown-content">
                                <a className="link_plus" href="#"><span>Causes</span></a>
                                <a className="link_plus" href="#"><span>Music</span></a>
                            </div>
                        </div>
                        <a href="/" className="link_section">À propos</a>
                    </nav>
                    <nav className="nav3_section">
                        <a href="/" className="link_section">Paramètre</a>
                    </nav>
                    <nav>
                        <div>
                            {txt}
                        </div>
                    </nav>
                </div>
                <hr className="hr"/>
            </div>
        );
    }
}


export default Header;

