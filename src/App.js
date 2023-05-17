import Home from "./pages/home/Home";
// import Login from "./pages/home/Login";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
// import About from "./pages/about/About";
import Settings from "./pages/settings/Settings";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Switch } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
 
  return (
    
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="//post/:postId">
          <Single />
        </Route>
        <Route exact path="/write">
          <Write />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
