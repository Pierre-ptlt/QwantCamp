import React/*, {Component} */from "react";
import "../css/Favorite.css"

/*class FavoriteList extends Component {
    render() {
        //const list =this.props.list;
        //const onDelete =this.props.onDelete;
        const {list, onDelete}= this.props;*/
const FavoriteList =( {list, onDelete} )=>(
        <li>
                    {list.link}
                    <button className="button_X" onClick={() =>onDelete(list.id)}>
                        <span aria-label = " red cross " role = " img " > ❌ </ span ></button>
        </li>
);
export default FavoriteList;