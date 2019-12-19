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

function InputUnChecked() {
    return(
        <div className="divNotPopQoz">
            <label className="divText"><b>Qoz</b> est désactivé</label>
        </div>
    );
}

function InputChecked() {
    return(
        <div className="divPopQoz">
            <label className="divText"><b>Qoz</b> est activé</label>
        </div>
    );
}


class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            isChecked: true,
            myDivPop: false
        };

        this.handleCheckboxChecked = this.handleCheckboxChecked.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
    }


    getData(){
        setTimeout(() => {
            this.setState({myDivPop: true})
        }, 3000)
    }



    handleChangeSearch(event) {
        event.preventDefault();
        this.setState({'search': event.target.value});
    }

    handleSubmitSearch(event) {
        event.preventDefault();
        this.props.callBack();
        console.log(this.props);
    }


    handleCheckboxChecked() {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {

        let txt;
        if (this.state.isChecked) {
            txt = <InputChecked/>
        }
        else {
          txt = <InputUnChecked/>
        }

        if (this.state.isChecked) {
            this.getData()
        }
        else if (!this.state.isChecked) {
            this.getData();
        }


        return(
            <div>
                <div className="global_search">
                    <div className="search_bar">
                        <img className="search_logo" src={myImage}/>
                        <form onSubmit= {this.handleSubmitSearch}>
                            <input id="SearchInput" placeholder="Search..." value={this.state.search} onChange={this.handleChangeSearch}
                                   className="search_text" type="text"/>
                        </form>
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
                                            <td><a className="link_spec_produit" href="https://www.qwant.com" target="_blank"><img src={iconeQwant}/><span className="spec_produit">Qwant</span></a></td>
                                            <td><a className="link_spec_produit" href="https://www.qwantjunior.com" target="-_blank"><img src={iconeJunior}/><span className="spec_produit">Junior</span></a></td>
                                        </tr>
                                        <tr>
                                            <td><a className="link_spec_produit" href="https://www.qwant.com/maps" target="_blank"><img src={iconeMaps}/><span className="spec_produit">Maps</span></a></td>
                                            <td><a className="link_spec_produit" href="https://www.qwant.com/music" target="_blank"><img src={iconeMusique}/><span className="spec_produit">Music</span></a></td>
                                        </tr>
                                        <tr>
                                            <td><a className="link_spec_produit" href="https://www.qwant.com/causes" target="_blank"><img src={iconeCauses}/><span className="spec_produit">Causes</span></a></td>
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
                        <div hidden={this.state.myDivPop}>
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

