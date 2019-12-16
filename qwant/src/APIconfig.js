import React from 'react';
import ReactDOM from "react-dom";
import './App.css';


function APIconfig()
{
    let globalDateLocale = "fr-FR";

    const fetchOptions = {
        // Options du fetch avec le GET la méthode et les headers
        method: "GET",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Host: "https://api.qwant.com",
            "Client-ID": "CodeCamp",
            Token: "5dkCdp67D4a7zcOrSZrSqIqPmYZNf8Re"
        }
    };

    function QwantOptions() {

        this.Query = "france";
        this.Locale = "fr_fr";
        this.Count = 10;
        this.SafeSearch = 1;
        this.Freshness = "all";
        this.Order = "relevance";
    }

    function PrepareQwantOptions(queryOptions) {
        let strOptions = "";

        let knownOptions = {
            Query: "q=",
            Locale: "locale=",
            Count: "count=",
            SafeSearch: "safesearch=",
            Freshness: "freshness=",
            Order: "order=",
            Source: "source=",
            Filter: "f=h%"
        };

        for (let [key, value] of Object.entries(knownOptions)) {
            if (typeof queryOptions[key] !== "undefined") {
                if (strOptions.length > 0) strOptions += "&";
                strOptions += value + queryOptions[key];
            }
        }

        return strOptions;
    }


    function QwantDate(qwantDate) {
        const jsDate = new Date(0);
        jsDate.setSeconds(jsDate.getSeconds() + qwantDate);
        return jsDate.toLocaleDateString(globalDateLocale, {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }

// Rendering an article
    class QwantArticle extends React.Component {
        render() {

            let htmlMarkup = null;

            if (this.props.article.media.length > 0)
                htmlMarkup = `
        <li className = "Article">
          <a href="${this.props.article.url}" target=_blank>${this.props.article.title}</a>
          <p>
             <a href="${this.props.article.url}" target=_blank>
               <img src = "${this.props.article.media[0].pict.url}" alt = "${this.props.article.title}" className = "ImageArticle" height = "${this.props.article.media[0].pict.height}" />
             </a>
          </p>
        </li>
        <p>${this.props.article.desc} (${QwantDate(this.props.article.date)})</p>
        <p>Source : ${this.props.article.domain}</p>
      `;
            else
                htmlMarkup = `
        <li className = "Article">
          <a href="${this.props.article.url}" target=_blank>${this.props.article.title}</a>
        </li>
        <p>${this.props.article.desc} (${QwantDate(this.props.article.date)})</p>
        <p>Source : ${this.props.article.domain}</p>

      `;

            return (
                <p dangerouslySetInnerHTML={{ __html: htmlMarkup }} />
            );
        }
    }

// Affiche tous les articles
    class QwantArticles extends React.Component {
        render() {
            if (this.props.articles.length === 0)
                return( <p><b>Chargement des articles ...</b></p> );

            const articles = this.props.articles.map((item) => (
                <QwantArticle article={item} />
            ));

            return (
                <div className="Articles">
                    <ul>{articles}</ul>
                </div>
            );
        }
    }

    class QwantNewsApp extends React.Component {
        constructor(props) {
            super(props);
            this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
            this.handleChangeSearch = this.handleChangeSearch.bind(this);

            this.queryOptions = new QwantOptions();
            this.lastQuery = "";
            this.lookFor = "";

            this.state = {
                respData: [],
            };
        }

        DoAFetch() {
            if (this.lookFor.length > 0)
                this.queryOptions.Query = this.lookFor;

            const urlOptions = PrepareQwantOptions(this.queryOptions);
            console.log(urlOptions);
            if (this.lastQuery === urlOptions)
                return;
            this.lastQuery = urlOptions;

            const url = "https://api.qwant.com/partners/v2/qwant/news?" + urlOptions;

            fetch(url, fetchOptions).then(response => {
                response.json().then(jsonData => {
                    globalDateLocale = jsonData.query.locale.replace(/_/g, "-");
                    this.setState({ respData: jsonData.result.items });
                });
            });
        }

        componentDidMount() {
            this.DoAFetch();
        }

        handleChangeSearch(event) {
            this.lookFor = event.target.value;
        }

        handleSubmitSearch(event) {
            event.preventDefault();
            this.DoAFetch();
        }

        render() {
            // Affiche page news
            return (
                <div className="QwantNews">
                    <h1>Qwant News</h1>
                    <form onSubmit = {this.handleSubmitSearch}>
                        <input type = "text" value = {this.state.lookFor} onChange = {this.handleChangeSearch} />
                    </form>
                    <div className="News">
                        <h1>A la une...</h1>
                        <QwantArticles articles = {this.state.respData} />
                    </div>
                </div>
            );
        }
    }

    ReactDOM.render(<QwantNewsApp />, document.getElementById("root"));
}



export default APIconfig;