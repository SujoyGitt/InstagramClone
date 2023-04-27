import React from 'react'
import "./Stories.css"
import img1 from  "./Storiesimg/profile1.jpg"
import img2 from  "./Storiesimg/profile2.jpg"
import img3 from  "./Storiesimg/profile3.jpg"
import img4 from  "./Storiesimg/profile4.jpg"
import img5 from  "./Storiesimg/profile5.jpg"
export const Stories = () => {
  return (
    <div className='col-11 m-auto m-lg-none py-2 d-flex justify-content-md-center'>
      <div className="col-12 col-md-8 col-lg-5 mt-4 py-3 px-0 stories">
       
          <div className=" profile text-center">
             <div className="storiesimg"><img src={img1} alt="" /></div>
             <span>Kuntay12</span>
          </div>
          <div className=" profile">
             <div className="storiesimg"><img src={img2} alt="" /></div>
             <span>harr@34</span>
          </div>
          <div className=" profile">
             <div className="storiesimg"><img src={img3} alt="" /></div>
             <span>Sujo234</span>
          </div>
          <div className=" profile">
             <div className="storiesimg"><img src={img4} alt="" /></div>
             <span>Radk@3ejf</span>
          </div>
          <div className=" profile">
             <div className="storiesimg"><img src={img5} alt="" /></div>
             <span>Jo23@34</span>
          </div>
          <div className=" profile">
             <div className="storiesimg"><img src={img1} alt="" /></div>
             <span>Sujoy123</span>
          </div>
        </div>
     
    </div>
  )
}
