import logo from './logo.svg';
import Login from "./Login/index.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes> 
            <Route exact path='/' render={() => (<Login/>)}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
