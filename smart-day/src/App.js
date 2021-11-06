import logo from './logo.svg';
import Login from "./Login/index.js"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LevelSelect from './LevelSelect/index.js';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch> 
            <Route exact path='/' render={() => (<Login/>)}/>
            <Route exact path='/smart' render={() => (<LevelSelect/>)}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
