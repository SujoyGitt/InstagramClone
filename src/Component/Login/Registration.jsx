import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import logo from "./Loginimg/Logo.png";
import google from "./Loginimg/Google Play.png"
import microsoft from "./Loginimg/Microsoft.png"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Registration = ({formsToggle,closeform,handleinput,registeruser,input}) => {

  return (
    <div className="container mt-3 d-flex justify-content-center flex-wrap" >
    <div className="loginheader  col-10">
      <div className="row g-0 g-lg-5 justify-content-center" onClick={closeform} id='close'>

        <div className="loginform col-12 col-sm-10 col-md-8 col-xl-5">
          <div className="form px-4 pt-4 pb-2">
            <img src={logo} className="formlogo my-3" alt="logo"/>
            <h5>Sign up to see photos & videos <br /> from your friends</h5>
            <button className="btn col-11 mt-4"><FacebookIcon/> Log in with facebook</button>

            <form action="" className="" onSubmit={registeruser}>
            <div className="row justify-content-center px-3 mt-3">
              <div className="col-5"><hr /></div>
              <div className="col-2 text-center">OR</div>
              <div className="col-5"><hr /></div>
            </div>
              <div className="row justify-content-center g-0">
                <div className="col-11">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email"
                    name="email"
                    value={input.email}
                    onChange={handleinput}
                    required
                  />

                </div>
                <div className="col-11">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="fullname"
                    value={input.fullname}
                    onChange={handleinput}
                    required
                  />
                </div>
                <div className="col-11">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    name="username"
                    value={input.username}
                    onChange={handleinput}
                    required
                  />
                </div>
                <div className="col-11">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={input.password}
                    onChange={handleinput}
                    required
                  />
                </div>
               <h6 className='terms learn my-4 mb-3 text-center'>People who user our service may have uploaded your contact information to Instagram. <span>Learn <br /> More</span></h6>
               <h6 className='terms text-center'>By singing Up you agree to our <span>terms,privacy <br /> policy</span> and <span> cookies policy.</span></h6>
                  <button className="btn col-10 my-3">Sign Up</button>
                
              </div>
              
            <div className="row text-center loginfacebook">
              <p><FacebookIcon/>Login With Facebook</p>
              <p>Forgot Password?</p>
            </div>
            </form>
           
          </div>
          <div className="signup form px-4 py-3 pb-2 mt-3">
            <p>
            Have an account ? <span onClick={formsToggle}>Log In</span>
            </p>
          </div>
          <div className="col-12 text-center my-3 mb-2">
            <p>Get the app</p>
          </div>
          <div className="col-12 logbrand">
            <div className="row g-2 justify-content-center">
            <div className="col-5"><img src={google} alt="" /></div>
            <div className="col-5"><img src={microsoft} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="loginfooter col-12 col-sm-10 my-3 mt-5">
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
        <p> English <ExpandMoreIcon/> <span>©️ {new Date().getFullYear() } Instagram from meta </span></p>
      </div>
    </div>
  </div> 
  )
}
