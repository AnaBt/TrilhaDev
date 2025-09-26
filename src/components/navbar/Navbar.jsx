import { useState, useRef } from 'react';
import './navbar.css'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [selectorStyle, setSelectorStyle] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const ulRef = useRef(null);

  const handleHover = (e) => {
    const li = e.currentTarget;
    const left = li.offsetLeft;
    const width = li.offsetWidth;
    setSelectorStyle({ left: left, width: width });
  };

  return (
    <nav>
      <Link to="/home" className='title'>&lt;AB /&gt;</Link>

      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      <ul className={menuOpen ? "open" : undefined} ref={ulRef}>
        <li onMouseEnter={handleHover}>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li onMouseEnter={handleHover}>
          <NavLink to="/timeline">Experience</NavLink>
        </li>
        <li onMouseEnter={handleHover}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li onMouseEnter={handleHover} className = "contact">
          <NavLink className = "contact" to="/contact">Contact</NavLink>
        </li>
        <span className="seletor" style={selectorStyle}></span>
      </ul>
      <button><NavLink className = "contact" to="/contact">Contact</NavLink></button>
    </nav>
  );
}
