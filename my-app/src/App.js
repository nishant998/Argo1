import './App.css';
import Navbar from './Navbar.js' ;
import Home from './Home.js'
import Contact_us from './Contact_us.js'
import About from './About.js'
import FAQ from './FAQ.js'
import Login_register from './Login_register.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
        <div className="Header__container">
        <Router>
          <div className="Header__nav">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" exact component={About} />
              <Route path="/Contact_us" exact component={Contact_us} />
              <Route path="/FAQ" exact component={FAQ} />
              <Route path="/login" exact component={Login_register} />
              <Route path="/register" exact component={Login_register} />
            </Switch>
          </div>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
