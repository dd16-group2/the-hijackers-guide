import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import GuidelinesPage from "./pages/guidelinesPage";
import Guideline from "./pages/guideline";
import Onboarding from "./pages/onboarding";
import About from "./pages/about";
import Nav from "./components/nav";

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div className="App">
      {location.pathname !== "/the-hijackers-guide/" && <Nav />}
      <Switch location={background || location}>
        <Route exact path="/the-hijackers-guide/" children={<Onboarding />} />
        <Route
          path="/the-hijackers-guide/guidelines"
          children={<GuidelinesPage />}
        />
        <Route path="/the-hijackers-guide/about" children={<About />} />
      </Switch>
    </div>
  );
}

export default App;
