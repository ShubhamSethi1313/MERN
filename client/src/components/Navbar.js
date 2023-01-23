/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "../images/download.jpg";

import { UserContext } from "../App";

const Navbar = () => {
  const { state } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/"
            >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navbar-brand" to="/logout">
              <button className="btn btn-primary btn-sigin-home" type="button">
                Logout
              </button>
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/"
            >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          

          <li className="nav-item">
            <NavLink className="navbar-brand" to="/signup">
              <button className="btn btn-primary btn-sigin-home" type="button">
                Signin
              </button>
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark p-0">
        <div className="container-fluid">
          <form class="nosubmit search-frm">
            <input
              class="nosubmit search"
              type="search"
              placeholder="Search 9,000+ tutorials"
            />
          </form>

          <NavLink className="navbar-brand" to="/">
            <img className="center" src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
