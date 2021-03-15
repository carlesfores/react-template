import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import About from './components/About';
import Footer from './components/Footer';
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
            <Footer/>
          </footer>
        </div>
      </Router>
  );
}

export default App;
