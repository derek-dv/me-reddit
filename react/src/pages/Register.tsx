import React, { useState } from "react";
import "../styles/auth.css";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
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
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
            <div className="auth__field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
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
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <div className="auth__field">
              <label htmlFor="password2">Confirm password</label>
              <input
                type="password"
                id="password2"
                value={password2}
                onChange={(e)=>setPassword2(e.target.value)}
                placeholder="Confirm password"
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
