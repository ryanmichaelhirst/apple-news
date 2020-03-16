import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Homepage from "./pages/Homepage";
import ArticlePage from "./pages/ArticlePage";
import SavedPage from "./pages/SavedPage";
import urls from "./data";

const keys = Object.keys(urls);

const App = () => {
    const [selected, setSelected] = useState("Top Stories");

    const onClick = id => setSelected(id);

    return (
        <Router>
            <div>
                <Route path={"/"}>
                    <MenuBar
                        menuItems={Object.keys(urls).map(key => key)}
                        selected={selected}
                        onClick={onClick}
                    />
                </Route>
                <Route exact path={"/"}>
                    <Homepage
                        mainUrl={urls[selected]}
                        relatedUrl={urls[keys[keys.length * Math.random() << 0]]}
                    />
                </Route>
                <Route exact path={"/article"} component={ArticlePage} />
                <Route exact path={"/savedArticles"} component={SavedPage} />
            </div>
        </Router>
    );
};

export default App;