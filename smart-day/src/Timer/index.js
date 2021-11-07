import React, { useState } from "react";
import "./styles.css";
import ReactTimerStopwatch from "react-stopwatch-timer";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Stopwatch } from "hooked-react-stopwatch";
import { Link } from "react-router-dom";

function Timer() {
  const [play, setPlay] = useState(false);

  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));

  const [selected, setSelected] = useState("Work");

  const handlePlay = () => {
    setPlay(!play);
  };

  const handleReset = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  const handleSelect = () => {
    setSelected(selected === "Work" ? "Physical Activity" : "Work");
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
        <Link to="/smart" className="btn btn-primary nav-button-select">
          Select
        </Link>
        <Link to="/setup" className="btn btn-primary nav-button-select">
          Setup
        </Link>
        <Link to="/access" className="btn btn-primary nav-button-select">
          Access
        </Link>
      </div>
      <h1 className="page-title">Activity Timer</h1>
      <br />
      <br />
      <br />

      <DropdownButton id={0} title={selected} className="select">
        <Dropdown.Item href="#/action-1" onClick={handleSelect}>
          Work
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={handleSelect}>
          Physical Activity
        </Dropdown.Item>
      </DropdownButton>

      <br />
      <br />
      <br />
      <Stopwatch
        hideMilliseconds={true}
        separators={[":", ":", ""]}
        timeContainerClassName="time"
        playIconClassName="stop-btns"
        pauseIconClassName="stop-btns"
        resetIconClassName="stop-btns"
      />

      {/* <ReactTimerStopwatch isOn={play} className="react-stopwatch-timer__table" watchType="stopwatch"
                displayCircle={true} color='#557CB6' hintColor="rgb(197, 196, 196)" fromTime={time}/>
            <br/>
            <div className="circle-btns">
                <button className="timer-btn circle-space" onClick={handlePlay}>
                    {play ? '||' : <div className="triangle"/>}
                </button>
                <button className="timer-btn" onClick={handleReset}>
                    <div className="square"/>
                </button>
                
            </div> */}
    </div>
  );
}

export default Timer;
