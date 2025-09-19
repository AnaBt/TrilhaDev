import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  AboutMe  from './components/pages/AboutMe.jsx'
import  Contact  from './components/pages/Contact.jsx'
import  Education  from './components/pages/Education.jsx'
import  Home  from './components/pages/Home.jsx'
import  Projects  from './components/pages/Projects.jsx'
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path = "/home" element = {<Home />}/>
      <Route path = "/about" element = {<AboutMe />}/>
      <Route path = "/education" element = {<Education />}/>
      <Route path = "/projects" element = {<Projects />}/>
      <Route path = "/contact" element = {<Contact />}/>
    </Routes>
    
    </>
  )
}

export default App
