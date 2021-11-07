import React from "react";
import "./dashboard.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import DonutChart from "react-donut-chart";

const Header = () => {
  return <h1 className="header">Dashboard</h1>;
};

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="chart-container">
        <DonutChart
          data={[
            {
              label: "Work",
              value: 25,
            },
            {
              label: "Physical Activity",
              value: 25,
            },
            {
              label: "Sleep",
              value: 15,
            },
            {
              label: "Entertainment",
              value: 10,
            },
            {
              label: "Social",
              value: 25,
            },
          ]}
          legend={false}
          innerRadius={0.5}
          outerRadius={1}
          height={160}
          width={160}
        />
      </div>
    </div>
  );
};

export default Dashboard;
