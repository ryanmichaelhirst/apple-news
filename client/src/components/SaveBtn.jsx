import React, { useState } from "react";
import axios from "axios";

const SaveBtn = ({ article }) => {
    const [saved, setSaved] = useState(false);

    const onClick = () => {
        setSaved(prevState => !prevState);
        axios
            .post('/actions/saveArticle/:title/:url', {
                title: article.title,
                url: article.url
            })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    };

    return (
        <p
            className={saved ? "saveBtn saved" : "saveBtn"}
            onClick={onClick}
        >
            {saved ? "Saved" : "Save Story"}
        </p>
    );
};

export default SaveBtn;