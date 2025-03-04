import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>
            <img src=".././images" />
          </li>
          <li>
            <Link to="/">Brille Board</Link>
          </li>
          {/* <li>
            <Link to="/multicub">Multi Cub</Link>
          </li> */}
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          {/* <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/podcast">Podcast</Link>
          </li> */}
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <input placeholder="Log in" />
            <i class="fas fa-user"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
