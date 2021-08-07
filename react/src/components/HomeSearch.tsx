import "../styles/HomeSearch.css";

const HomeSearch = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">LOGO</div>
        <div className="navbar__links">
          <a href="/">Home</a>
          <a href="/">About</a>
        </div>
      </div>
      <div className="navbar__right">
        <a href="/" className="navbar__auths">
          Login
        </a>
        <a href="/" className="navbar__auths">
          Register
        </a>
      </div>
    </div>
  );
};

export default HomeSearch;
