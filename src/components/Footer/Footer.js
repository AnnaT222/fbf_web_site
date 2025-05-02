import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column company-info">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <h2 className="green-title">FBF informations</h2>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>125 Armenak Armenakyan St, Yerevan, Armenia</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>fbfcompany4bf@gmail.com</p>
            </div>
          </div>

          <div className="footer-column">
            <h2 className="green-title">Company</h2>
            <p>Home</p>
            <p>Brille Board</p>
            <p>About Us</p>
            <p>Photon</p>
            <p>Education</p>
            <p>News</p>
          </div>

          <div className="footer-column">
            <h2 className="green-title">Help</h2>
            <p>Support</p>
            <p>FAQs</p>
            <p>Payment</p>
            <h2 className="green-title">Legal</h2>
            <p>Privacy and policy</p>
            <p>Terms of Donation and Discounts</p>
          </div>
        </div>

        <div className="social-media-logos">
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com">
            <FaLinkedinIn />
          </a>
          <a href="https://t.me/">
            <FaTelegramPlane />
          </a>
          <a href="https://youtube.com">
            <FaYoutube />
          </a>
        </div>

        {/* <p className="footer-copy">© 2024 #FBF</p> */}
      </div>
    </footer>
  );
}

export default Footer;
