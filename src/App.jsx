import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  AboutMe  from './components/pages/about/AboutMe.jsx'
import  Contact  from './components/pages/contact/Contact.jsx'
import  Home  from './components/pages/home/Home.jsx'
import  Projects  from './components/pages/Projects/Projects.jsx'
import Timeline from './components/pages/Timeline/Timeline.jsx'
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/home" element = {<Home />}/>
      <Route path = "/about" element = {<AboutMe />}/>
      <Route path = "/timeline" element = {<Timeline />}/>
      <Route path = "/projects" element = {<Projects />}/>
      <Route path = "/contact" element = {<Contact />}/>
    </Routes>
    
    </>
  )
}

export default App
