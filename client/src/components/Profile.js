import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pic from "../images/profile.jpg";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Profile = () => {
  const navitage = useNavigate();

  const [userData, setUserData] = useState({});

  const callProfile = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      //  console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navitage("/login");
    }
  };
  useEffect(() => {
    callProfile();
  });

  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="alert alert-success d-flex pt-1 mt-0" role="alert">
        <p className="m-auto alert-about">
          <strong className="m-auto">Success!</strong> You have signed in to
          your account. Happy Coding!
        </p>
        <button
          type="button"
          className="btn-close m-auto"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      {/*--------------------profile button here---------------------- */}
      <Tabs
        onClick={() => setLgShow(true)}
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className=""
      >
        <Tab eventKey="profile" title="View-Profile"></Tab>
      </Tabs>
      {/* </Button> */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Profile Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container emp-profile">
            <form method="GET">
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-img">
                    <img src={pic} alt="profile" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="profile-head">
                    <h5>{userData.name}</h5>
                    <h6>{userData.work}</h6>
                    <p className="proile-rating">
                      RANKINGS : <span>8/10</span>
                    </p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="/profile"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-work">
                    <p>WORK LINK</p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>User Id</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData._id}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.name}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      {/*--------------------here---------------------- */}

      <div className="d-grid gap-2 col-6 mx-auto mt-5 justify-content-">
        <h1 className="about-heading">Welcome to freeCodeCamp.org</h1>

        <div className="text-center quote-partial">
          <blockquote className="blockquote">
            <span>
              <q className="about-heading-q">
                I have not failed. I've just found 10,000 ways that won't work.
              </q>
              <footer className="quote-author blockquote-footer">
                <cite className="edison">Thomas A. Edison</cite>
              </footer>
            </span>
          </blockquote>
        </div>
        <button className="btn btn-primary btn-about" type="button">
          (New) Responsive Web Design Certification
        </button>
        <button className="btn btn-primary btn-about" type="button">
          JavaScript Algorithms and Data Structures Certification
        </button>
        <button className="btn btn-primary btn-about" type="button">
          Front End Development Libraries Certification
        </button>
        <button className="btn btn-primary btn-about" type="button">
          Data Visualization Certification
        </button>
        <button className="btn btn-primary btn-about" type="button">
          Relational Database (Beta) Certification
        </button>
        <button className="btn btn-primary btn-about" type="button">
          Back End Development and APIs Certification
        </button>
        <button className="btn btn-primary btn-about" type="button">
          Quality Assurance Certification
        </button>
      </div>
    </>
  );
};

export default Profile;
