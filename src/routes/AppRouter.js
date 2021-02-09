import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPageContainer from "../pages/LoginPage/LoginPageContainer";
import SignUpPageContainer from "../pages/SignUpPage/SignUpPageContainer";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginPageContainer/>
                </Route>
                <Route exact path="/signUp">
                    <SignUpPageContainer/>
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
