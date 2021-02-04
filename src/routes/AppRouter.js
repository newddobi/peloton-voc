import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VocAddPageContainer from "../pages/VocAddPage/VocAddPageContainer";
import VocListPageContainer from "../pages/VocListPage/VocListPageContainer";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <VocListPageContainer/>
                </Route>
                <Route exact path="/add">
                    <VocAddPageContainer/>
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
