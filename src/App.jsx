import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/contact/Contact.jsx";
import Home from "./components/pages/home/Home.jsx";
import Projects from "./components/pages/Projects/Projects.jsx";
import Experience from "./components/pages/Timeline/Experience.jsx";
import Footer from "./components/footer/footer.jsx";
function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route path="/TrilhaDev/" element={<Home />} />
        <Route path="/TrilhaDev/home" element={<Home />} />
        <Route path="/TrilhaDev/timeline" element={<Experience />} />
        <Route path="/TrilhaDev/projects" element={<Projects />} />
        <Route path="/TrilhaDev/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
