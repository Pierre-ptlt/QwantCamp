import React from 'react';
//import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false
        }
    }

    componentDidMount() {
        let url = "api/user/1";

        fetch(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Fetch</h1>
            </div>
        )
    }
}
