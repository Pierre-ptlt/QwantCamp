import React, {Component} from 'react';
import FavoriteList from "./Componentes/FavoriteList";
import FavoriteAdd from "./Componentes/FavoriteAdd";
import "./css/Favorite.css"


class FavoriteBar extends Component {
    //< span aria-label = " une fusée décollant " role = " img " >   🚀 </ span >
    // < span aria-hidden = " true " role = " img " >   🤫 </ span >

    displayFavoriteBar = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            favorites: [
                {id: 1, link: "Ex: Le Monde"},
            ],
            isHidden: false,

        };
    }
    handleDelete = (id) => {
        const favorites = [...this.state.favorites];
        const index = favorites.findIndex(favorite =>
            favorite.id === id);
        favorites.splice(index, 1);
        this.setState({favorites: favorites});
    };
    handleAdd = favorite => {
        const favorites = [...this.state.favorites];
        favorites.push(favorite);

        this.setState({favorites});
    };

    handleDisplay () {
        const display =  this.displayFavoriteBar;
        const see= this.state.isHidden;
        this.setState({
            isHidden: !this.state.isHidden
        });
        if(see === true ){
            display.current.className="display_bar"
        }
        else{
            display.current.className="favo_bar"
        }
    };

    render() {
        return (
            <div className="left-body">
                <button onClick={() => this.handleDisplay()}>Favorites</button>
                <div ref={this.displayFavoriteBar} className="display_bar">
                    <ul className="favo_list">
                        {!this.state.isHidden}
                        {this.state.favorites.map(favorite => (
                            <FavoriteList list={favorite} onDelete={this.handleDelete}/>
                        ))}
                        <div className="favo_add">
                            <FavoriteAdd onFavoriteAdd={this.handleAdd}/>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
export default FavoriteBar;
