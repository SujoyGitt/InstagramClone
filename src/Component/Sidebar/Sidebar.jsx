import "./Sidebar.css"
import img from "./profile.jpg"
import { Siderbardata } from "./Siderbardata"
import img1 from './Storiesimg/profile1.jpg'
import img2 from './Storiesimg/profile2.jpg'
import img3 from './Storiesimg/profile3.jpg'
import img4 from './Storiesimg/profile4.jpg'
import img5 from './Storiesimg/profile5.jpg'
export const Sidebar = ()=>{
  return(
    <>
      <div className="sidebar col-4 d-none d-lg-block">
        <div className="sidebar_user">
          <div className="sidebar_user_details col-9 col-xl-8">
           <div className="sidebar_user-avater ms-3 mt-2"><img src={img} alt="" /></div>
           <div className="sidebar_user-name ms-3"><span>Sujoy123</span> <br /> Frontend Devoloper</div>
          </div>
          <div className="switch col-3">Switch</div>
        </div>
<div className="suggest px-3 my-2">
  <h6>Suggestions for you</h6><span className="me-5">See All</span>
</div>
<Siderbardata img={img1} username={'toto.n55'}/>
<Siderbardata img={img2} username={'Sanjib.6142'}/>
<Siderbardata img={img3} username={"Rohit Bhudiya 120"}/>
<Siderbardata img={img4} username={"Harry1354"}/>
<Siderbardata img={img5} username={"jouy24e"}/>
<div className="sidebar_about col-12 px-3 my-4">
        About . Help . Press . API . Jobs . Privacy . Terms . Locations . Language . Meta Verified
      </div>
      <div className="sidebar_footer col-12 px-3 text-uppercase my-3">
      <p>©️ {new Date().getFullYear() } Instagram from meta </p>
      </div>
      </div>
     
    </>
  )
}