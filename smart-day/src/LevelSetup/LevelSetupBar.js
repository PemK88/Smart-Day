import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "./LevelSetup.css"

const LevelSetupBar = ({ title, image, tag, percentage, numHours }) => {
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

                </Col>
                <Col xs={3} className="center hours">
                    <select name="hours" id="hours" value={numHours}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">23</option>
                        <option value="24">24</option>
                    </select> {"  "}h
                </Col>
            </Row>
        </div>
    )
}

export default LevelSetupBar
