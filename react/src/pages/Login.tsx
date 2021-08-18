import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../action/auth/auth";
import { DefaultState } from "../store";
import "../styles/auth.css";

const Login: React.FC<any> = ({ history }) => {
  const user = useSelector((state: any) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };
  useEffect(() => {
    console.debug(user);
    if (user.user) {
      history.push("/");
    }
  }, [user]);
  return (
    <div className="auth">
      <div className="auth__form">
        <div>
          <h1 className="auth__heading">Login</h1>
        </div>
        <div className="auth__form">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="auth__field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className={
                  user.msg
                    ? user.msg.type === "error" && user.msg.field === "username"
                      ? "auth__input auth__input--error"
                      : "auth__input"
                    : "auth__input"
                }
                required
              />
              {user.msg ? (
                user.msg.type === "error" && user.msg.field === "username" ? (
                  <p className="auth__error">{user.msg.text}</p>
                ) : null
              ) : null}
            </div>
            <div className="auth__field">
              <label htmlFor="password1">Password</label>
              <input
                type="password"
                id="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={
                  user.msg
                    ? user.msg.type === "error" && user.msg.field === "password"
                      ? "auth__input auth__input--error"
                      : "auth__input"
                    : "auth__input"
                }
                required
              />
              {user.msg ? (
                user.msg.type === "error" && user.msg.field === "password" ? (
                  <p className="auth__error">{user.msg.text}</p>
                ) : null
              ) : null}
            </div>
            <button className="auth__button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
