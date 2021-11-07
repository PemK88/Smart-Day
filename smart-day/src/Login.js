import React from 'react'
import "./Login.css"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Button className="hello">login</Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button>login</Button>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Login
