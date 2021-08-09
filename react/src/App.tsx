import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Layout>
        <div className="app">
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
