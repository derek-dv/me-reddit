import React from "react";
import "../styles/HomeSearch.css";

interface HomeSearchProps {}

const HomeSearch: React.FC<HomeSearchProps> = ({}) => {
  return (
    <form className="search">
      <input className="search__input" placeholder="search" />
      <p className="search__text">filter by</p>
      <div className="search__checks">
        <div className="search__check">
          {" "}
          <input type="checkbox" id="title" />
          <label htmlFor="title">Title</label>
        </div>
        <div className="search__check">
          <input type="checkbox" id="author" />
          <label htmlFor="author">Author</label>
        </div>
      </div>
      <button type="submit" className="search__button">Search</button>
    </form>
  );
};

export default HomeSearch;
