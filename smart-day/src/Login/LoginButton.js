import React from "react";
import { Button } from "react-bootstrap"
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css"

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <Button className="login-button" onClick={() => loginWithRedirect()}>Continue to Login</Button>;
};

export default LoginButton;