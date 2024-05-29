import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Anchor } from "antd";

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import logoImg from "../img/logo.png";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    const mode = searchParams.get("mode");
    setShowSignUp(mode === "signup");
  }, [searchParams]);

  const items = [
    {
      key: "login",
      href: "?mode=login",
      title: <Link to={"?mode=login"}>{"Sign in"}</Link>, //produce a warning in console,but  any other approach reloads component
    },
    {
      key: "signup",
      href: "?mode=signup",
      title: <Link to={"?mode=signup"}>{"Sign Up"}</Link>, //produce a warning in console,but  any other approach reloads component
    },
  ];

  return (
    <div className="form__container">
      <div className="form__box">
        <img className="form__logo-img" alt="logo sign" src={logoImg}></img>
        <div className="form__btn">
          <Anchor direction="horizontal" items={items} />
        </div>
        {!showSignUp ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default AuthPage;
