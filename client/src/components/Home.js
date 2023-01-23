import React from "react";
import apple from "../images/appleblack.png";
import google from "../images/google.png";
import micro from "../images/micro.png";
import spoti from "../images/spoti.png";
import amz from "../images/amz.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated, user, isLoading, logout } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className="d-grid gap-2 col-6 mx-auto mt-5 justify-content-center">
        <h1>
          {isAuthenticated && (
            <div className="container">
              <div className="justify-content-center verify-img mb-3">
                <img src={user.picture} alt="" />
              </div>
              <div className="verify-title">
                <h2>Welcome {user.name} !!</h2>
                <p>{user.email}</p>
              </div>
            </div>
          )}
        </h1>
        {isAuthenticated ? (
          <button
            className="btn-home text-align-center"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ) : null}
        <div className="landing-top">
          <div className="container">
            <h1 className="big-heading" data-test-label="landing-header">
              Learn to code — for free.
            </h1>
            <h1 className="big-heading">Build projects.</h1>
            <h1 className="big-heading">Earn certifications.</h1>
            <p className="home-para">
              Since 2014, more than 40,000 freeCodeCamp.org graduates have
              gotten jobs at tech companies including:
            </p>
            <div className="container bg-home">
              <div className="row">
                <div className="col">
                  <div className="applebox">
                    {" "}
                    <img className="apple" src={apple} alt="apple" />
                  </div>
                </div>
                <div className="col">
                  <div className="googlebox">
                    {" "}
                    <img className="google" src={google} alt="google" />
                  </div>
                </div>
                <div className="col">
                  <div className="microbox">
                    {" "}
                    <img className="micro" src={micro} alt="micro" />
                  </div>
                </div>
                <div className="col">
                  <div className="spotibox">
                    {" "}
                    <img className="spoti" src={spoti} alt="spoti" />
                  </div>
                </div>
                <div className="col">
                  <div className="amzbox">
                    {" "}
                    <img className="amz" src={amz} alt="amz" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container ms-5">
            <NavLink className="navbar-brand" to="/signup">
              <button
                className="btn btn-primary btn-home mt-2 text-align-center "
                type="button"
              >
                Get started (it's free)
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
