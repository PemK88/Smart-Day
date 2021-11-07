import logo from "./logo.svg";
import Login from "./Login/index.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LevelSelect from "./LevelSelect/index.js";
import Dashboard from "./Dashboard";
import LevelSetup from "./LevelSetup";
import Timer from "./Timer";
import Access from "./Access";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/access" render={() => <Access />} />
          <Route exact path="/smart" render={() => <LevelSelect />} />
          <Route exact path="/setup" render={() => <LevelSetup />} />
          <Route exact path="/timer" render={() => <Timer />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
