import React, { useEffect, useState } from 'react'
import '../assets/css/nav.css'

function Nav() {

  const [show,handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100){
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
  },[]);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
          <img className = "nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
          <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" />
      </div>
    </div>
  )
}

export default Nav
