import "./App.css";
import HomePosts from "./components/HomePosts";
import HomeSearch from "./components/HomeSearch";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <div className="app">
        <HomeSearch />
        <HomePosts />
      </div>
    </Layout>
  );
}

export default App;
