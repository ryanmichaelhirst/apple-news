import React from "react";
import ArticleListCtn from "../containers/ArticleListCtn";

const Homepage = ({ mainUrl, relatedUrl }) => {
    return (
        <div className={"homepage"}>
            <div className={"section1"}>
                <div className={"sectionCtn"}>
                    <ArticleListCtn
                        title={"For You"}
                        url={mainUrl}
                    />
                </div>
            </div>
            <div className={"section2"}>
                <div className={"sectionCtn"}>
                    <ArticleListCtn
                        title={"Related Stories"}
                        url={relatedUrl}
                    />
                </div>
            </div>
        </div>
    );
};

export default Homepage;