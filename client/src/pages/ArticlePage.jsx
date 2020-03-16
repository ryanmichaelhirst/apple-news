import React, { useEffect, useState } from "react";
import axios from "axios";
import urls from "../data";
import TimeCounter from "../components/TimeCounter";

const ArticlePage = ({ match }) => {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        // we get a random news article here because the api does not allow for retrieving of a specific article by id or title
        // a workaround is to gather all the articles at the start of the app and assign them a unique id
        // but that's a little overkill for this assignment
        axios
            .get(urls.Technology)
            .then(res => setArticle(res.data.articles[0]))
            .catch(err => console.error(err));
    }, [match]);

    if (!article) {
        return null;
    }

    return (
        <div className={"articlePageCtn"}>
            <div className={"articlePage"}>
                <h3 className={"articlePageSrc"}>{article.source.name}</h3>
                <img className={"articlePageImg"} src={article.urlToImage} alt={article.description} />
                <h1>{article.title}</h1>
                <p>{article.content}</p>
                <TimeCounter publishedAt={article.publishedAt} />
            </div>
        </div>
    );
};

export default ArticlePage;