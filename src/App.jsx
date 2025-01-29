import React from 'react';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Skills from'./components/Skills.jsx';
import Projects from'./components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Experience from './components/Experience.jsx';
import "./App.css"
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
