import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <p>&copy; 2023 Winx Design Agency. All rights reserved.</p>
        <ul>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="services.html">Services</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
