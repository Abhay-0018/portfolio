import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skills from '../components/Skills'
import ProjectsSection from '../components/ProjectsSection'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
      {/* Theme Toggle  */}

    <ThemeToggle/>

      {/* Background Effects  */}
      <Background/>

      {/* Navbar  */}
      <Navbar/>

      {/* Main content  */}

      <main>
        <HeroSection/>
        <About/>
        <Skills/>
        <ProjectsSection/>
        <Contacts/>
      </main>

      {/* Footer  */}
      <Footer/>
    </div>
  )
}

export default Home
