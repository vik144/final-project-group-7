import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        
        <h1 class="Logo">Winx</h1>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
