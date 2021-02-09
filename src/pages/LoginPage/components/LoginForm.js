import React, { useRef } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const brandId = useRef("");
    const id = useRef("");
    const password = useRef("");

    const logInSubmit = (e) => {
        e.preventDefault();
        console.log(
            brandId.current.value,
            id.current.value,
            password.current.value
        );
    };

    return (
        <div>
            <div className="content-head">
                <h1>관리자 로그인</h1>
            </div>
            <form action="">
                <input
                    className="form form-text lg"
                    type="text"
                    placeholder="브랜드 아이디"
                    ref={brandId}
                />
                <input
                    className="form form-text lg"
                    type="text"
                    placeholder="아이디"
                    ref={id}
                />
                <input
                    className="form form-text lg"
                    type="password"
                    placeholder="비밀번호"
                    ref={password}
                />
                <button
                    type="button"
                    className="btn-lg btn-blue-primary"
                    value="button"
                    onClick={logInSubmit}
                >
                    로그인
                </button>
                <Link to="/signUp">
                    <button
                        type="button"
                        className="btn-lg btn-outline-blue"
                        value="button"
                    >
                        회원가입
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default LoginForm;
