import React from "react";
import "./Login.css";
import LoginButton from "./LoginButton"
import Welcome from "../images/welcome.png"
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Header = () => {
  return <h1 className="header">Smart Day</h1>;
};

const Login = () => {
  return (
    <div>
      <Header />
      <p className="slogan">Your day is about to get smarter!</p>
      <Form>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="username"
            type="text"
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group> */}
        {/* <Button className="login-button" variant="primary" type="submit">
          LOG IN
        </Button> */}
        <img style={{ width: "400px", marginTop: "100px", marginLeft: "15px" }} src={Welcome} />
        <LoginButton />
      </Form>
    </div>
  );
};

export default Login;
