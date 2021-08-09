import React from "react";
import "../styles/auth.css";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <div className="auth">
      <div className="auth__form">
        <div>
          <h1 className="auth__heading">Register</h1>
        </div>
        <div className="auth__form">
          <form>
            <div className="auth__field">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Enter email" />
            </div>
            <div className="auth__field">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter username" />
            </div>
            <div className="auth__field">
              <label htmlFor="password1">Password</label>
              <input
                type="password"
                id="password1"
                placeholder="Enter password"
              />
            </div>
            <div className="auth__field">
              <label htmlFor="password2">Confirm password</label>
              <input
                type="password"
                id="password2"
                placeholder="Confirm password"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
