import "../styles/HomeSearch.css";

const HomeSearch = () => {
  return (
    <form className="search">
      <input placeholder="search" type="text" className="search__input" />
      <div className="search__text">Filter by</div>
      <div className="search__checks">
        <div className="search__check">
          <input type="checkbox" id="author" />
          <label htmlFor="author">Author</label>
        </div>
        <div className="search__check">
          <input type="checkbox" id="title"/>
          <label htmlFor="title">Title</label>
        </div>
      </div>
      <button className="search__button" type="submit">Search</button>
    </form>
  );
};

export default HomeSearch;
