import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import "./index.css";

export default function Index() {
  return(
    <>
      <Router>
        <div className="navbar-comp">
          <Navbar />
        </div>

        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/services">
              <Services />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}