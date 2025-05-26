import "./EmailSignUp.css";
import BrailleBoardImage from "./images/Braille_board.png";

function EmailSignUp() {
  return (
    <div className="email-signup">
      <div className="email-signup-image">
        <img src={BrailleBoardImage} alt="Braille Board sign-up" />
      </div>

      <div className="email-signup-right">
        <div className="email-signup-text">
          <h1>Be the First to Experience the Braille Board!</h1>
          <div
            className="accessible-paragraph"
            role="paragraph"
            tabIndex="0"
            aria-label="Email signup message"
          >
            Sign up to stay updated on our launch and enjoy special early bird offers.
          </div>
        </div>

        <div className="email-signup-input">
          <input type="email" placeholder="Write your email" />
        </div>

        <div className="email-signup-button">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default EmailSignUp;