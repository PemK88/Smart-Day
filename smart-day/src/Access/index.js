import React from "react";
import "./styles.css";

const Header = () => {
  return <h1 className="page-title">Data Access</h1>;
};

const Access = () => {
  return (
    <div>
      <Header />
      <p className="subheading-1">Allow Screentime Access</p>
      <p className="subtext-1">
        this allows the app to calculate your screentime
      </p>
      <button className="button-1 white-button-text">Let's Start</button>
      <button className="button-2 black-button-text">Don't Allow</button>
      <p className="subheading-2">Allow Apple Health Access</p>
      <p className="subtext-2">
        this allows the app to calculate sleep and physical activity
      </p>
      <button style={{ top: 270 }} className="button-1 white-button-text">
        Let's Start
      </button>
      <button style={{ top: 270 }} className="button-2 black-button-text">
        Don't Allow
      </button>
      <p className="subheading-3">Allow Notifications</p>
      <p className="subtext-3">
        this allows the app to send you notifcations on your progress
      </p>
      <button style={{ top: 390 }} className="button-1 white-button-text">
        Let's Start
      </button>
      <button style={{ top: 390 }} className="button-2 black-button-text">
        Don't Allow
      </button>
    </div>
  );
};

export default Access;
