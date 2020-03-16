import React from "react";
import Article from "./Article";

const ArticleList = ({ articles }) => {
    return articles.map((a, idx) => <Article key={a.title} article={a} idx={idx} />);
};

export default ArticleList;