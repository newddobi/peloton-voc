import React from "react";
import { connect } from "react-redux";
import LoginForm from "./components/LoginForm";
import { userSignIn } from "actions/index.js";

const LoginPageContainer = ({ userSignIn }) => {
    return (
        <div>
            <LoginForm userSignIn={userSignIn} />
        </div>
    );
};

export default connect(null, { userSignIn })(LoginPageContainer);
