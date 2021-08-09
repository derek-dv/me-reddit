import React from "react";
import HomePosts from "../components/HomePosts";
import HomeSearch from "../components/HomeSearch";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <HomeSearch />
      <HomePosts />
    </>
  );
};
export default Home;
