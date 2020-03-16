import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "../components/ArticleList";
import Article from "../components/Article";

const ArticleListCtn = ({ url, title }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => setArticles(res.data.articles))
            .catch(err => console.error(err));
    }, [url]);

    if (articles.length === 0) {
        return null;
    }

    return (
        <div className={"articleListCtn"}>
            <h1 className={"articleListCtnTitle"}>{title}</h1>
            <Article artice={articles[0]} headline={true} />
            <ArticleList articles={articles.slice(1)} />
        </div>
    );
};

export default ArticleListCtn;