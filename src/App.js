import React from 'react';
import './App.css';
import Header from './components/header/header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects';
import Qualification from './components/qualification/Qualification';
// import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollDown from './components/home/ScrollDown';
import ScrollUp from './components/scrollUp/ScrollUp';

function App() {
  return (
    <>
       <Header></Header>
       <main classname='main'>
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Qualification></Qualification>
          {/* <Contact></Contact> */}
       </main>
       <Footer></Footer>
       <ScrollUp/>
    </>
  );
}

export default App;
