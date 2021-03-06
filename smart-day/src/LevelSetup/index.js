import React, { useState } from "react";
import Bar from "./LevelSetupBar";
import { Container } from "react-bootstrap";
import Entertainment from "../images/entertainment.png";
import Physical from "../images/physical-activity.png";
import Sleep from "../images/sleep.png";
import Social from "../images/social.png";
import Work from "../images/work.png";
import "./LevelSetup.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const LevelSetup = () => {
  const [selected, setSelected] = useState("");

  const [hours, setHours] = useState(new Array(5).fill(0));

  const handleSelect = (value, hours) => {
    setSelected(value);
    setHours(hours);
  };

  return (
    <div>
      <div>
        <Link to="/dashboard" className="btn btn-primary nav-button-select">
          Dash
        </Link>
        <Link to="/" className="btn btn-primary nav-button-select">
          Home
        </Link>
        <Link to="/smart" className="btn btn-primary nav-button-select">
          Select
        </Link>
        <Link to="/timer" className="btn btn-primary nav-button-select">
          Timer
        </Link>
        <Link to="/access" className="btn btn-primary nav-button-select">
          Access
        </Link>
      </div>
      <h1 className="page-title">Level Setup</h1>
      <br />

      <DropdownButton id={0} title={selected} className="select margin-auto">
        <Dropdown.Item
          href="#/action-1"
          onClick={() => {
            handleSelect("Chill", [3, 2, 10, 3, 3]);
          }}
        >
          Chill
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-2"
          onClick={() => {
            handleSelect("Balance", [7, 2, 7, 4, 4]);
          }}
        >
          Balance
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          onClick={() => {
            handleSelect("Focus", [10, 1, 7, 3, 3]);
          }}
        >
          Focus
        </Dropdown.Item>
      </DropdownButton>
      <br />
      <br />

      <Container className="categories">
        <Bar image={Work} tag="Productive" title="Work" numHours={hours[0]} />
        <Bar
          image={Physical}
          tag="Health"
          title="Physical Activity"
          numHours={hours[1]}
        />
        <Bar image={Sleep} tag="Health" title="Sleep" numHours={hours[2]} />
        <Bar
          image={Entertainment}
          tag="Leisure"
          title="Entertainment"
          numHours={hours[3]}
        />
        <Bar image={Social} tag="Leisure" title="Social" numHours={hours[4]} />
      </Container>
    </div>
  );
};

export default LevelSetup;
