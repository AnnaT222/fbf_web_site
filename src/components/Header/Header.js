import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import logo from "./images/Generic avatar.png";
import NavBarLogo from "./images/Logo_green.png";

function Header() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home after logout ✅
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
            <img src={logo} alt="User Icon" className="user-logo" />
          </li>

          <li className="auth-wrapper">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="auth-button">
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/auth")}
                className="auth-button"
              >
                Login / Signup
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
