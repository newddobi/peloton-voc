import React, { useRef } from "react";

const SignUpForm = () => {
    const brandId = useRef("");
    const id = useRef("");
    const password = useRef("");
    const email = useRef("");
    const mobile = useRef("");
    const name = useRef("");

    const signUpSubmit = (e) => {
        e.preventDefault();
        console.log(
            brandId.current.value,
            id.current.value,
            password.current.value,
            email.current.value,
            mobile.current.value,
            name.current.value
        );
    };

    return (
        <div>
            <div className="content-head">
                <h1>서비스 회원가입</h1>
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
                <input
                    className="form form-text lg"
                    type="text"
                    placeholder="이메일"
                    ref={email}
                />
                <input
                    className="form form-text lg"
                    type="text"
                    placeholder="휴대폰번호"
                    ref={mobile}
                />
                <input
                    className="form form-text lg"
                    type="text"
                    placeholder="이름"
                    ref={name}
                />
                <button
                    type="button"
                    className="btn-lg btn-blue-primary"
                    value="button"
                    onClick={signUpSubmit}
                >
                    가입하기
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
