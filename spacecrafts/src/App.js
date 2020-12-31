import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import SpacecraftsComponent from "./components/SpacecraftsComponent";
import DetailSpacecraftComponent from "./components/DetailSpacecraftComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route exact path="/spacecrafts">
            <SpacecraftsComponent />
          </Route>
          <Route exact path="/spacecrafts/:id">
            <DetailSpacecraftComponent />
          </Route>
        </Switch>
      </Router>

      <FooterComponent />
    </div>
  );
}

export default App;
