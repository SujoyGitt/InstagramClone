import React from 'react';
import './Loading.css'
import logo from "./logo.png"
import meta from "./download.png"

function Loading() {
  return (
    <div className='loading'>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <div className="meta_logo"><span>from</span><br /><img src={meta} alt="metalogo" /></div>
    </div>
  );
}

export default Loading;