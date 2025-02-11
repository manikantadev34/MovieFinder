import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
            <Link to="/">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR20G05qnsm2xNIP0-wI7SQpfnMsJ7g14v1Q&s" 
      alt="Icon" 
      width="50" 
      height="50" 
    />
  </Link>            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </div>

            <div className={`navbar-link ${isMenuOpen ? "active" : ""}`}>
                <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
                <Link to="/favorite" className="nav-link" onClick={toggleMenu}>Favorites</Link>
                <Link to="/aboutus" className="nav-link" onClick={toggleMenu}>About Us</Link>
                <Link to="/contactus" className="nav-link" onClick={toggleMenu}>Contact Us</Link>
            </div>
        </nav>
    );
}

export default NavBar;
