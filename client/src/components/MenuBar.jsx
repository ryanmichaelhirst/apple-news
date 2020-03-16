import React from "react";
import { useHistory } from "react-router-dom";

const MenuBar = ({ menuItems, selected, onClick }) => {
    const history = useHistory();
    const handleClick = ({ target: { id } }) => {
        onClick(id);
        history.push("/");
    };

    const toSavedStories = () => {
        onClick("");
        history.push("/savedArticles");
    };

    return (
        <div className={"menuBar"}>
            <span className={"logoBlock"}>
                NewsAPI
            </span>
            <a
                className={"menuItem attrLink"}
                href={"https://newsapi.org/pricing"}
                target="_blank"
            >
                Powered by NewsAPI.org
            </a>
            {menuItems.map(mi => {
                return (
                    <div key={mi} className={"menuItem-ctn"}>
                        <p
                            className={mi === selected ? "menuItem selected" : "menuItem"}
                            onClick={handleClick}
                            id={mi}
                        >
                        {mi}
                        </p>
                    </div>
                )
            })}
            <div className={"menuItem-ctn"}>
                <p
                    className={"menuItem savedStoriesBtn"}
                    onClick={toSavedStories}
                >
                    Saved stories
                </p>
            </div>
        </div>
    );
};

export default MenuBar;