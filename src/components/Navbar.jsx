import { use, useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
useState

export default function Navbar(){
    const [menuOpen,setMenuOpen] = useState(false)

    return (
        <nav>
           <Link to = "/home" className='title'>AJ</Link>
           <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen)}}>
            <span></span>
            <span></span>
            <span></span>
           </div>
            <ul className = {menuOpen ? "open" : undefined}>
                <li>
                    <NavLink to = "/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to = "/about">About Me</NavLink>
                </li>
                <li>
                    <NavLink to = "/education">Education</NavLink>
                </li>
                <li>
                    <NavLink to = "/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to = "/contact">contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}
