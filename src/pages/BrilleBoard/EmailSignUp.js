import "./EmailSignUp.css";
function EmailSignUp() {
  return (
    <div className="email-signup">
      <div className="email-signup-image">
        <img src="#" alt="Sign up" />
        <div>
          <div className="email-signup-text">
            <h1>Be the First to Experience the Braille Board!</h1>
            <p>
              Sign up to stay updated on our launch and enjoy special early bird
              offers.
            </p>
          </div>
          <div className="email-signup-input">
            <input placeholder="Write your email" />
          </div>
          <div className="email-signup-button">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmailSignUp;
