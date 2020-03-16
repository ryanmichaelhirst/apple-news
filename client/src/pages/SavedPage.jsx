import React, { useEffect, useState } from "react";
import axios from "axios";

const SavedPage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get('/actions/getSavedArticles')
            .then(res => setArticles(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={"savedArticlesPageCtn"}>
            <h1>Saved stories page</h1>
            {articles.map((a, idx) => {
                return (
                    <div key={idx} className={"savedArticleItem"}>
                        <p className={"savedArticleTitle"}>{a.title}</p>
                        <a
                            className={"savedArticleUrl"}
                            href={a.url}
                            target={"_blank"}
                        >
                            Read the story here
                        </a>
                    </div>
                )
            })}
        </div>
    );
};

export default SavedPage;