import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

const Dashbar = ({ title, image, tag, percentageOver, percentage}) => {
    return (
        <div>
            <Row className="bar-container">
                <Col xs={3} className="center">
                    <img src={image}></img></Col>
                <Col xs={4}>
                    <Row className="bar-title">
                        {title}
                    </Row>
                    <Row className={"category-tag-" + tag}>
                        {tag}
                    </Row>
                </Col>
                <Col xs={2} className="center">
                    ({percentageOver}%)

                </Col>
                <Col xs={3} className="center hours">
                    {percentage}%

                  
                </Col>
            </Row>
        </div>
    )
}

export default Dashbar;
