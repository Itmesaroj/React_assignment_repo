import  { useState } from "react";
import { FaHome, FaImages, FaPhone, FaInfoCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a href="/" className="title">
        Home
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#">
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a href="#">
            <FaImages /> Gallery
          </a>
        </li>
        <li>
          <a href="#">
            <FaPhone /> Contact
          </a>
        </li>
        <li>
          <a href="#">
            <FaInfoCircle /> About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar};
