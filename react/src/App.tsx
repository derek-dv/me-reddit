import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePosts from "./components/HomePosts";
import HomeSearch from "./components/HomeSearch";
import Layout from "./components/layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <div className="app">
          <Route exact path="/" component={Home}/>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
