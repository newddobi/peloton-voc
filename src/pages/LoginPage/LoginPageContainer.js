import React from "react";
import { connect } from "react-redux";
import LoginForm from "./components/LoginForm";
import { userSignIn } from "actions/index.js";

const LoginPageContainer = () => {
    return (
        <div>
            <LoginForm userSignIn={userSignIn} />
        </div>
    );
};

const mapDispatchToProps = { userSignIn };

export default connect(null, mapDispatchToProps)(LoginPageContainer);
