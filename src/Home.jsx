import React from 'react'
import HeroSection from './components/HeroSection'
import About from './About';
import Services from './Services';

const Home = () => {
  const data = {
    name: "ramesh stor",
    image: "./images/hero.svg"
  }

  return (
    <>
      <HeroSection {...data} />
      <Services/>
      <About />
    </>

  );
}

export default Home
