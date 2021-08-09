import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
  <Router>
    <Header />
    <div style={{minHeight: "85vh"}}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
