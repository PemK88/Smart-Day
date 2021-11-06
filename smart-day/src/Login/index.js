import React from "react";
import "./Login.css";
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
        </Form.Group>
        <Button className="login-button" variant="primary" type="submit">
          LOG IN
        </Button>
      </Form>
    </div>
  );
};

export default Login;
