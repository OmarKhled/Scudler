import { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";

const App = () => {
  useEffect(() => {
    const ele = document.getElementById("loading");
    if (ele) {
      ele.classList.add("available");
      setTimeout(() => {
        ele.outerHTML = "";
        document
          .querySelector('link[rel=stylesheet][href~="/styles/styles.css"]')
          .remove();
      }, 200);
    }
  }, []);
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
