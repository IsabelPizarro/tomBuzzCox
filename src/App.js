import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'


function App() {
  return (
    <Router>
        <NavBar/>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route>  */}
        </Switch>
        </Router>
  );
}

export default App;
