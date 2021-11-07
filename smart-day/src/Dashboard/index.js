import React from "react";
import "./dashboard.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import DonutChart from "react-donut-chart";
import Dashbar from "./Dashbar";
import Entertainment from "../images/entertainment.png";
import Physical from "../images/physical-activity.png";
import Sleep from "../images/sleep.png";
import Social from "../images/social.png";
import Work from "../images/work.png";
import { Link } from "react-router-dom";

const Header = () => {
  return <h1 className="header">Dashboard</h1>;
};

const Dashboard = () => {
  return (
    <div>
      <div>
        <Link to="/access" className="btn btn-primary nav-button-dash">
          Access
        </Link>
        <Link to="/smart" className="btn btn-primary nav-button-dash">
          Select
        </Link>
        <Link to="/setup" className="btn btn-primary nav-button-dash">
          Setup
        </Link>
        <Link to="/timer" className="btn btn-primary nav-button-dash">
          Timer
        </Link>
        <Link to="/" className="btn btn-primary nav-button-dash">
          Login
        </Link>
      </div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="chart-container">
        <DonutChart
          data={[
            {
              label: "Work",
              value: 25,
            },
            {
              label: "Physical Activity",
              value: 19,
            },
            {
              label: "Sleep",
              value: 0,
            },
            {
              label: "Entertainment",
              value: 25,
            },
            {
              label: "Social",
              value: 31,
            },
          ]}
          colors={["#7012CF", "#F2994A", "#FD5B71", "#27AE60", "#638ECE"]}
        />
        <div className="white-box">16 Hours</div>
      </div>

      <Container className="categories">
        <Dashbar
          image={Work}
          tag="Productive"
          title="Work"
          percentageOver={"+33"}
          percentage={"25"}
        />
        <Dashbar
          image={Physical}
          tag="Health"
          title="Physical Activity"
          percentageOver={"+50"}
          percentage={"19"}
        />
        <Dashbar
          image={Sleep}
          tag="Health"
          title="Sleep"
          percentageOver={"-100"}
          percentage={"0"}
        />
        <Dashbar
          image={Entertainment}
          tag="Leisure"
          title="Entertainment"
          percentageOver={"+33"}
          percentage={"25"}
        />
        <Dashbar
          image={Social}
          tag="Leisure"
          title="Social"
          percentageOver={"+67"}
          percentage={"31"}
        />
      </Container>
    </div>
  );
};

export default Dashboard;
