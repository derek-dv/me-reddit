import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <Link to="/">reddit</Link>
        </div>
        <div className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
        </div>
      </div>
      <div className="navbar__right">
        <Link to="/" className="navbar__auths">
          Login
        </Link>
        <Link to="/register" className="navbar__auths">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
