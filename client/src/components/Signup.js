import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
  const { loginWithRedirect } = useAuth0();

  const navitage = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;
  const handelInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    // console.log("data aya hai"+data)
    if (res.status === 422 || !data) {
      window.alert(
        "Invalid Registration. Please Fill Out this Fields or Email Alredy Exist!"
      );
      //  console.log("Invalid Registration")
    } else {
      window.alert("Registration Successfully");
      // console.log("Successfull Registration")

      navitage("/login");
    }
  };

  return (
    <div className="d-grid gap-2 col-6 mx-auto mt-5 justify-content-center">
      {/*--------------------This is my Signup page--------------------------------------- */}
      <div className="container sg-box">
        <div className="signup-box">
          <form
            method="POST"
            className="register-form login-signup-form"
            id="register-form"
          >
            <label htmlFor="name" className="login-signup-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handelInputs}
              placeholder="Enter Your Name"
              className="login-signup-input"
              required
            />

            <label htmlFor="email" className="login-signup-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handelInputs}
              placeholder="Enter Your Email"
              className="login-signup-input"
              required
            />

            <label htmlFor="password" className="login-signup-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={handelInputs}
              placeholder="Enter Your Password"
              className="login-signup-input"
              required
            />

            <button
              type="submit"
              name="signup"
              id="signup"
              value="Register"
              onClick={PostData}
              className="login-signup-input inputbtn"
            >
              Register
            </button>
          </form>
        </div>
        <p className="login-sigup-para">
          Already have an account?{" "}
          <NavLink to="/login">
            <span className="login-signup-link">Login here</span>
          </NavLink>
        </p>
      </div>

      {/*----------------------------Signup page ends here------------------------------ */}

      <button
        onClick={() => loginWithRedirect()}
        className="btn btn-primary btn-sign mt-3"
        type="button"
      >
        Continue with Google
      </button>
      <h3 className="separator heading">
        <span>or</span>
      </h3>
      <button className="btn btn-primary btn-sign mt-4" type="button">
        <div>
          <a
            href="https://freecode-9b0699.login.mojoauth.com/?env=test&redirect_uri=localhost:3000/about"
            className="btn-sign"
          >
            {" "}
            Email me a sign in code{" "}
          </a>
        </div>
      </button>

      <div className="legal mt-5">
        <p>
          freeCodeCamp is free and your account is private by default. We use
          your email address to connect you to your account.
        </p>
        <p>
          You must be at least 13 years old to create an account on
          freeCodeCamp.
        </p>
        <p>
          By continuing, you indicate that you have read and agree to
          freeCodeCamp.org's
          <a
            className="cnd-link"
            href="https://www.freecodecamp.org/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Terms of Service{" "}
          </a>
          and
          <a
            className="cnd-link"
            href="https://www.freecodecamp.org/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
