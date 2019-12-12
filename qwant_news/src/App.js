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

        let url = "https://api.qwant.com/partners/v2/qwant/news?q=caf%C3%A9&locale=fr_FR&count=10&safesearch=1&freshness=all&order=relevance&source=lemonde.fr&f=h%3AAWBvgcuzInokOJSyGhGJ";
        console.log(url);

        fetch(url, {
            //mode: 'no-cors',
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:3000',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Allow-Origin': '*',
        'Host': 'https://api.qwant.com',
                'Client-ID': 'CodeCamp',
                'Token': '5dkCdp67D4a7zcOrSZrSqIqPmYZNf8Re'
            },
        })//.then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    console.log("accepted");
                } else {
                    console.log(res.error);
                }

            })
    }

    render() {
        return (
            <div className="App">
                <h1>Article :</h1>
            </div>
        );
    }
}