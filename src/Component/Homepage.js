import React from 'react'
import Navbar from './Navebar'
import Herosection from './Herosection'
import About from './About'
import Service from './Service'
import WharPeopleSay from './WharPeopleSay'
function Homepage() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <About/>
      <Service/>
      <WharPeopleSay/>
    </div>
  )
}

export default Homepage
