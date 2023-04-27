import React, { useContext, useState } from "react";
import "./Model.css";
import { contextprovider } from "../../Global/Context";
import FacebookIcon from "@material-ui/icons/Facebook";
import img1 from "./Loginimg/screenshot1.png";
import img2 from "./Loginimg/screenshot2.png";
import img3 from "./Loginimg/screenshot3.png";
import img4 from "./Loginimg/screenshot4.png";
import logo from "./Loginimg/Logo.png";
import google from "./Loginimg/Google Play.png";
import microsoft from "./Loginimg/Microsoft.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Registration } from "./Registration";
export const Model = () => {
  let { model, closeModel, register, login } = useContext(contextprovider);
  const [state, setstate] = useState({
    Register: true,
    Login: false,
  });
  const formsToggle = () => {
    setstate({
      ...state,
      Register: !state.Register,
      Login: !state.Login,
    });
  };

  const closeform = (e) => {
    const clas = e.target.getAttribute("class");
    const id = e.target.getAttribute("id");
    if (clas === "model" || id === "close") {
      closeModel();
    }
  };
  let [input, setinput] = useState({
    email: "",
    fullname: "",
    password: "",
    username: "",
  });
  const handleinput = (e) => {
    let { name, value } = e.target;
    setinput({ ...input, [name]: value });
  };
  const registeruser = (e) => {
    e.preventDefault();
    register(input);
    setinput({ email: "", fullname: "", password: "", username: "" });
  };
  const userlogin = (e) => {
    e.preventDefault();
    login(input);
    setinput({ email: "", password: "" });
  };
  return (
    <>
      {model ? (
        <div className="model" onClick={closeform}>
          {state.Register ? (
            <Registration
              formsToggle={formsToggle}
              closeform={closeform}
              handleinput={handleinput}
              registeruser={registeruser}
              input={input}
            />
          ) : (
            <div className="container  mt-5 d-flex justify-content-center flex-wrap">
              <div className="loginheader col-12 col-xl-10">
                <div
                  className="row g-5 justify-content-center "
                  id="close"
                  onClick={closeform}
                >
                  <div className="loginimg col-4 d-none d-md-block">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                  </div>

                  <div className="loginform col-12 col-md-8 col-xl-5">
                    <div className="form px-md-4 pt-md-4 pb-md-2 p-0">
                      <img src={logo} className="formlogo my-4" alt="logo" />
                      <form action="" className="" onSubmit={userlogin}>
                        <div className="row justify-content-center">
                          <div className="col-11">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Your Email"
                              value={input.email}
                              onChange={handleinput}
                              name="email"
                            />
                          </div>
                          <div className="col-11">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Password"
                              value={input.password}
                              onChange={handleinput}
                              name="password"
                            />
                          </div>
                          <button className="btn col-10 mt-4">Log in</button>
                        </div>
                        <div className="row justify-content-center px-3 mt-3">
                          <div className="col-5">
                            <hr />
                          </div>
                          <div className="col-2 text-center">OR</div>
                          <div className="col-5">
                            <hr />
                          </div>
                        </div>
                        <div className="row text-center loginfacebook">
                          <p>
                            <FacebookIcon />
                            Login With Facebook
                          </p>
                          <p>Forgot Password?</p>
                        </div>
                      </form>
                    </div>
                    <div className="signup form px-4 py-3 pb-2 mt-3">
                      <p>
                        Don't have an account?{" "}
                        <span onClick={formsToggle}>Sign up</span>
                      </p>
                    </div>
                    <div className="col-12 text-center my-3 mb-2">
                      <p>Get the app</p>
                    </div>
                    <div className="col-12 logbrand">
                      <div className="row g-2 justify-content-center">
                        <div className="col-5">
                          <img src={google} alt="" />
                        </div>
                        <div className="col-5">
                          <img src={microsoft} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="loginfooter col-10 my-3 mt-5">
                <div className="col-12">
                  <a href="/">Meta</a>
                  <a href="/">About</a>
                  <a href="/">Blog</a>
                  <a href="/">Jobs</a>
                  <a href="/">Helps</a>
                  <a href="/">API</a>
                  <a href="/">Privacy</a>
                  <a href="/">Terms</a>
                  <a href="/">Top Accounts</a>
                  <a href="/">Locations</a>
                  <a href="/">Instagram Lite</a>
                  <a href="/">Contact Uploading & Non-Users</a>
                  <a href="/">Meta Verified</a>
                </div>
                <div className="col-12 copyright text-center my-3">
                  <p>
                    English <ExpandMoreIcon />
                    <span>
                      ©️ {new Date().getFullYear()} Instagram from meta
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
