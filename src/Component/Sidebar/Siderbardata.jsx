import React from 'react'

export const Siderbardata = ({img,username}) => {
  return (
    <div className="sidebar_user my-1">
          <div className="sidebar_user_details col-9 col-xl-8">
           <div className="sidebar_user-avater sidebar_user_profile ms-3 mt-2"><img src={img} alt="" /></div>
           <div className="sidebar_user-name ms-3"><span>{username}</span> <br /> <span>Suggested for you</span></div>
          </div>
          <div className="switch col-3">Switch</div>
        </div>
  )
}
