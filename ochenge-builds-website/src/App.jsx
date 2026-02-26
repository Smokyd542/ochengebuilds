import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Socials from './Socials/Socials'
import TechStack from './Techstack/Techstack'
import Testimonials from './Testimonials/Testimonials'

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Skills />
    <TechStack />
    <Projects />
    <Testimonials />
    <Contact />
    <Socials />
    <Footer />
    </>
  )
}

export default App