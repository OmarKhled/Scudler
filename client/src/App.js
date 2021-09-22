import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: "85vh" }}>
        <Switch>
          <AuthRoute exact path="/register" component={Signup} />
          <AuthRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
