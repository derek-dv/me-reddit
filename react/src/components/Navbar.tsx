import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <a href="/">reddit</a>
        </div>
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

export default Navbar;
