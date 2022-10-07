import React from 'react'
import '../assets/css/Banner.css'

function Banner() {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: "center center",
    }}>
      <div className="banner_contents">
          <h1 className="banner_title">
              Movie Name
          </h1>
          <div className="banner_buttons">
              <button className='banner_button'>Play</button>
              <button className='banner_button'>My List</button>
          </div>
          <h1 className="banner_description">
              {truncate("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, animi quibusdam quos doloribus rem excepturi dolorum temporibus eligendi cum nemo ipsa iste reiciendis recusandae similique odit explicabo repudiandae quis nulla nam debitis est facilis consequatur. Recusandae voluptate nobis neque voluptas expedita veritatis labore sequi a accusamus, magnam vero, velit deserunt facilis architecto rerum quae? Facere voluptates perferendis rerum!",150)}
          </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner
