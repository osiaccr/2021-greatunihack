import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "src/pages/dashboard";
import Profile from "src/pages/discord";
import Contact from "src/pages/contact";
import Sponsors from "src/pages/sponsors";
import Challenges from "src/pages/challenges";
import Team from "src/pages/team";
import Twitch from "src/pages/twitch";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard/home">
          <Dashboard />
        </Route>
        <Route exact path="/dashboard/discord">
          <Profile />
        </Route>
        <Route exact path="/dashboard/sponsors">
          <Sponsors />
        </Route>
        <Route exact path="/dashboard/contact">
          <Contact />
        </Route>
        <Route exact path="/dashboard/challenges">
          <Challenges />
        </Route>
        <Route exact path="/dashboard/twitch">
          <Twitch />
        </Route>
        <Route exact path="/dashboard/team">
          <Team />
        </Route>
        <Route path="/dashboard">
          <Redirect to="/dashboard/home" />
        </Route>
      </Switch>
    </Router>
  );
}
