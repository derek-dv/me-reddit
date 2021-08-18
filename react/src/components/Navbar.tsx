import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DefaultState } from "../store";
import "../styles/Navbar.css";

const Navbar = () => {
  const user = useSelector((state: any) => state.user);
  const navLinks = user.user ? (
    <>
      <Link to="/profile" className="navbar__auths">
        {user.user.username}
      </Link>
      <Link to="/logout" className="navbar__auths">
        Logout
      </Link>
    </>
  ) : (
    <>
      <Link to="/login" className="navbar__auths">
        Login
      </Link>
      <Link to="/register" className="navbar__auths">
        Register
      </Link>
    </>
  );
  return (
    <div className="navbar">
      {user.loading ? (
        <p>loading</p>
      ) : (
        <>
          <div className="navbar__left">
            <div className="navbar__logo">
              <Link to="/">reddit</Link>
            </div>
            <div className="navbar__links">
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
            </div>
          </div>
          <div className="navbar__right">{navLinks}</div>
        </>
      )}
    </div>
  );
};

export default Navbar;
