import React, { useState } from "react";
import "./App.scss";
import Header from "./Header";
import FavoriteBar from "./FavoriteBar";
import ReactHtmlParser from 'react-html-parser'
let globalDateLocale = "fr-FR";

const fetchOptions = {
  // Options du fetch avec le GET la méthode et les headers
  method: "GET",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json",
    "Client-ID": "CodeCamp",
    "Token": "5dkCdp67D4a7zcOrSZrSqIqPmYZNf8Re"
  },
  mode: 'cors',
  cache: 'default'
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

  const knownOptions = {
    Query: "q=",
    Locale: "locale=",
    Count: "count=",
    SafeSearch: "safesearch=",
    Freshness: "freshness=",
    Offset: "offset=",
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
const QwantArticle = (props) => {
  const [show, setShow] = useState(false)
    return (
        <div className="Article">
          <a
            href={props.article.url}
            rel="noopener noreferrer"
            target="_blank"
            className='title'
          >
            {ReactHtmlParser(props.article.title)}
          </a>
          <a className="lien-description"
            href={props.article.url}
            rel="noopener noreferrer"
            target="_blank"
            onMouseOver={() => setShow(!show)} onMouseOut={() => setShow(!show)}
          >
            <div
            style={{ backgroundImage: `url(${props.article.media.length > 0 ? props.article.media[0].pict.url :"https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg" })`}}
              alt={`${props.article.media.length > 0 ? 'thumbnail' : 'empty'}`}
              className={'thumbnail'}
            />
            <div className='description-container'>
              { show && <p className="description">{ReactHtmlParser(props.article.desc)} {QwantDate(props.article.date)}</p>}
            </div>
          </a>
        <p>Source : {ReactHtmlParser(props.article.domain)}</p>
        </div>
    )
}
// Affiche tous les articles
class QwantArticles extends React.Component {
  render() {
    if (this.props.articles.length === 0)
      return (
        <p>
          <b>Chargement des articles ...</b>
        </p>
      );

    const articles = this.props.articles.map((item, i) => (
      <QwantArticle key={i} article={item} />
    ));

    return (
      <div className="articles">
        {articles}
      </div>
    );
  }
}

class QwantNewsApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);

    this.queryOptions = new QwantOptions();
    this.lastQuery = "";
    this.lookFor = "";

    this.state = {
      respData: []
    };
  }
  DoAFetch() {
    if (this.lookFor.length > 0) this.queryOptions.Query = this.lookFor;

    const urlOptions = PrepareQwantOptions(this.queryOptions);
    if (this.lastQuery === urlOptions) return;
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

  handleSubmitSearch() {
    this.lookFor = document.getElementById("SearchInput").getAttribute("value");
    console.log(this.lookFor);
    this.DoAFetch();
  }

  render() {
    // Affiche page news
    return (
      <div className="QwantNews">
        <Header callBack={this.handleSubmitSearch} />
        <div className="News">
          <div className="div-left">
            <FavoriteBar />
          </div>
          <QwantArticles articles={this.state.respData} />
        </div>
      </div>
    );
  }
}

export default QwantNewsApp;
