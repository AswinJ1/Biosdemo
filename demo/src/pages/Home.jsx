import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Visual from '../components/Visual'
import Team from '../components/Team'
import CTFEvents from '../components/CTFEvents'
import LearningSection from '../components/LearningSection'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Visual></Visual>
      <Team></Team>
     <CTFEvents></CTFEvents>
    <LearningSection></LearningSection>
    <Footer></Footer>
    </div>
  )
}

export default Home
