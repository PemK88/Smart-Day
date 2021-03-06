import React, { useState } from "react";
import "./styles.css";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function LevelSelect() {
  const [level, setLevel] = useState(new Array(7).fill(""));

  const handleSelect = (idx, selectedValue) => {
    let value = [...level];
    value[idx] = selectedValue;
    setLevel(value);
  };

  const generateDropDown = (idx) => {
    return (
      <DropdownButton
        id={idx.toString()}
        title={level[idx]}
        className="level-select"
      >
        <Dropdown.Item
          href="#/action-1"
          onClick={() => {
            handleSelect(idx, "Chill");
          }}
        >
          Chill
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-2"
          onClick={() => {
            handleSelect(idx, "Balance");
          }}
        >
          Balance
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          onClick={() => {
            handleSelect(idx, "Focus");
          }}
        >
          Focus
        </Dropdown.Item>
      </DropdownButton>
    );
  };

  return (
    <div className="page">
      <div>
        <Link to="/dashboard" className="btn btn-primary nav-button-select">
          Dash
        </Link>
        <Link to="/" className="btn btn-primary nav-button-select">
          Home
        </Link>
        <Link to="/setup" className="btn btn-primary nav-button-select">
          Setup
        </Link>
        <Link to="/timer" className="btn btn-primary nav-button-select">
          Timer
        </Link>
        <Link to="/access" className="btn btn-primary nav-button-select">
          Access
        </Link>
      </div>
      <h1 className="page-title">My Smart Week</h1>

      <ul className="days-list">
        <li>
          <p>Monday</p>
          {generateDropDown(0)}
        </li>
        <li>
          <p>Tuesday</p>
          {generateDropDown(1)}
        </li>
        <li>
          <p>Wednesday</p>
          {generateDropDown(2)}
        </li>
        <li>
          <p>Thursday</p>
          {generateDropDown(3)}
        </li>
        <li>
          <p>Friday</p>
          {generateDropDown(4)}
        </li>
        <li>
          <p>Saturday</p>
          {generateDropDown(5)}
        </li>
        <li id="no-bottom-border">
          <p>Sunday</p>
          {generateDropDown(6)}
        </li>
      </ul>
      <Button>Save</Button>
    </div>
  );
}

export default LevelSelect;
