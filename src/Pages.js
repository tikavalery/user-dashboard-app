
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDashBoard from "./pages/UsersDashBoard";
import UsersDetails from "./pages/UsersDetails"
import Home from "./pages/Home"
import SideBar from "./components/SideBar"
import TopBar from "./components/TopBar";

function Pages() {
  return (
    <Router>
      <TopBar />
      <div className="container-fluid">
        <div className="row">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/userdashboard">
            <UserDashBoard />
          </Route>
          <Route path="/userdetails/:id">
            <UsersDetails/>
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Pages;
