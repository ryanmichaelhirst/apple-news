import React from "react";
import { useHistory } from "react-router-dom";
import TimeCounter from "./TimeCounter";
import SaveBtn from "./SaveBtn";

const Article = ({ article, headline, idx }) => {
    const history = useHistory();

    if (!article) {
        return null;
    }

    const onClick = () => history.push('/article');

    return (
        <div className={headline ? "headline article-ctn" : "article-ctn"}>
            <h3 className={"articleSrc"}>{article.source.name}</h3>
            <SaveBtn article={article} />
            <img className={"articleImg"} src={article.urlToImage} alt={article.description} />
            <h1 className={"articleTitle"} onClick={onClick}>{article.title}</h1>
            <TimeCounter publishedAt={article.publishedAt} />
        </div>
    );
};

export default Article;