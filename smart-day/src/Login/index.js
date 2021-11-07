import React from "react";
import "./Login.css";
import LoginButton from "./LoginButton";
import Welcome from "../images/welcome.png";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return <h1 className="header">Smart Day</h1>;
};

const Login = () => {
  return (
    <div>
      <Link to="/dashboard" className="btn btn-primary nav-button-login">
        Dash
      </Link>
      <Link to="/smart" className="btn btn-primary nav-button-login">
        Select
      </Link>
      <Link to="/setup" className="btn btn-primary nav-button-login">
        Setup
      </Link>
      <Link to="/timer" className="btn btn-primary nav-button-login">
        Timer
      </Link>
      <Link to="/access" className="btn btn-primary nav-button-login">
        Access
      </Link>
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
        <img
          style={{ width: "400px", marginTop: "100px", marginLeft: "15px" }}
          src={Welcome}
        />
        <LoginButton />
      </Form>
    </div>
  );
};

export default Login;
