import React from 'react'
import '../assets/css/homeScreen.css'
import Banner from './Banner'
import Nav from './Nav'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav/>
      <Banner/>
    </div>
  )
}

export default HomeScreen
