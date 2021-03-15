import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
      <Router>
        <div className="app-wrapper">
          <header>
            <Nav/>
          </header>
          <Switch>
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </main>
          </Switch>
          <footer>
            <h3>page footer</h3>
          </footer>
        </div>
      </Router>
  );
}

export default App;
