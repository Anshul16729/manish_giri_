import React from 'react'
import Typewriter from '../../reusable-components/typeWriter'
import { profileName,words } from '../../utils/constants'

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center home-section">
    <div className="hero-container" data-aos="fade-in">
      <h1>{profileName}</h1>
      <p>I'm <Typewriter strings={words}/></p>
    </div>
  </section>
  )
}

export default HeroSection