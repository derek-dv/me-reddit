import React, { useState } from "react";
import "../styles/auth.css";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="auth">
      <div className="auth__form">
        <div>
          <h1 className="auth__heading">Login</h1>
        </div>
        <div className="auth__form">
          <form>
            <div className="auth__field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            <div className="auth__field">
              <label htmlFor="password1">Password</label>
              <input
                type="password"
                id="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <button
              className="auth__button"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log(e.target);
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
