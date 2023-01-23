import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../App";

const Login = () => {
  const { dispatch } = useContext(UserContext);

  const navitage = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials.");
    } else {
      dispatch({ type: "USER", payload: true });

      window.alert("Login Successfully");
      navitage("/profile");
    }
  };

  return (
    <div className="d-grid gap-2 col-6 mx-auto mt-5 justify-content-center">
      <div className="container sg-box">
        <div className="login-box mt-5">
          <h1 className="login-heading">Login</h1>
          <form method="POST" className="login-signup-form">
            <label className="login-signup-label">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="login-signup-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="login-signup-label">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="login-signup-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              value="Submit"
              name="submit"
              id="submit"
              className="login-signup-input inputbtn"
              onClick={loginUser}
            >
              Sign Up
            </button>
          </form>
        </div>
        <p className="login-sigup-para">
          Not have an account?{" "}
          <NavLink to="/signup">
            <span className="login-signup-link">Sign Up Here</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
