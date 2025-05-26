import "./LanguageAvailability.css";

function LanguageAvailability() {
  return (
    <div className="language-availability">
      <div className="language-availability-text">
        <h1>Language Availability</h1>
        <div
          role="paragraph"
          tabIndex="0"
          aria-label="Language availability explanation"
          className="accessible-paragraph"
        >
          The keyboard has flexible software that allows you to add any
          language and make it more accessible.
        </div>
      </div>
      <div className="language-availability-animation">
        <div className="rolling-circle" aria-hidden="true"></div>
      </div>
    </div>
  );
}

export default LanguageAvailability;
