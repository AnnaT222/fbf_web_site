import "./Footer.css";
import FBFLogo from "./fbf_logo.svg";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column company-info">
            <img src={FBFLogo} alt="FBF Logo" className="logo" />
            <h2 className="green-title">FBF informations</h2>

            {/* ✅ Clickable Google Maps link */}
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <a
                href="https://www.google.com/maps?q=125+Armenak+Armenakyan+St,+Yerevan,+Armenia"
                target="_blank"
                rel="noopener noreferrer"
                className="accessible-paragraph"
                role="link"
                tabIndex="0"
              >
                125 Armenak Armenakyan St, Yerevan, Armenia
              </a>
            </div>

            {/* ✅ Clickable email */}
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <a
                href="mailto:fbfcompany4bf@gmail.com"
                className="accessible-paragraph"
                role="link"
                tabIndex="0"
              >
                fbfcompany4bf@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h2 className="green-title">Company</h2>
            {["Home", "Brille Board", "About Us", "Game", "Education"].map(
              (text, i) => (
                <div
                  key={i}
                  className="accessible-paragraph"
                  role="paragraph"
                  tabIndex="0"
                >
                  {text}
                </div>
              )
            )}
          </div>

          <div className="footer-column">
            <h2 className="green-title">Help</h2>
            {["Support", "FAQs", "Payment"].map((text, i) => (
              <div
                key={i}
                className="accessible-paragraph"
                role="paragraph"
                tabIndex="0"
              >
                {text}
              </div>
            ))}
            <h2 className="green-title">Legal</h2>
            {["Privacy and policy", "Terms of Donation and Discounts"].map(
              (text, i) => (
                <div
                  key={i + 10}
                  className="accessible-paragraph"
                  role="paragraph"
                  tabIndex="0"
                >
                  {text}
                </div>
              )
            )}
          </div>
        </div>

        <div className="social-media-logos">
          <a
            href="https://www.instagram.com/fbf_company?utm_source=qr&igsh=Zm90NThtcW45dW52"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/fbfelectronics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@FBF-LLC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
