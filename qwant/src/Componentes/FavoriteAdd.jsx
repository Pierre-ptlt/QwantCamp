import React, {Component} from "react";


class FavoriteAdd extends Component {
    state= {
        newFavorite: " "
};
    handleChange = event => {

        //this.setState({newFavorite: event.currentTarget.value});
    };
    handleFormula = event => {
        event.preventDefault();
        const id = new Date().getTime();
        const link = this.state.newFavorite;

        this.props.onFavoriteAdd({id, link});
        this.setState({newFavorite: " "})
    };


    render() {
        return <form onSubmit={this.handleFormula}>
                    <input className="box_input" value={this.state.newFavorite} onChange={this.handleChange} type="text"
                        placeholder="Add your favorite"/>
                    <button className="add_button">Add</button>
                </form>
    }
}
export default FavoriteAdd;
