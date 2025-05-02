import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import logo from "./images/Generic avatar.png"; // Import your logo image
import NavBarLogo from "./images/Logo_green.png";

function Header() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is logged in (by checking if the access token exists)
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src={NavBarLogo}
          alt="Logo"
          style={{ width: "25px", height: "25px" }}
        />
      </div>
      <nav className="navbar">
        <ul>
          {/* <li>
            <img src=".././images" alt="Logo" />
          </li> */}
          <li>
            <Link to="/">Brille Board</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "20px", height: "20px" }}
              className="user-logo"
            />
          </li>
          <li>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="auth-button">
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="auth-button"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
