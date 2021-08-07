import "./App.css";
import HomeSearch from "./components/HomeSearch";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <div className="app">
        <HomeSearch />
      </div>
    </Layout>
  );
}

export default App;
