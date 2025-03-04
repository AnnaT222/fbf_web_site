import "./LanguageAvailability.css";

function LanguageAvailability() {
  return (
    <div className="language-availability">
      <div className="language-availability-text">
        <h1>Language Availability</h1>
        <p>
          The keyboard has flexible software that allows you to add any
          language and make it more accessible.
        </p>
      </div>
      <div className="language-availability-animation">
        <div className="rolling-circle"></div>
      </div>
    </div>
  );
}

export default LanguageAvailability;