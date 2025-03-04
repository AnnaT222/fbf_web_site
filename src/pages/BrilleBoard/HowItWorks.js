import "./HowItWorks.css";
function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="how-it-works-text">
        <h1>How it Works</h1>
        <div className="how-it-works-steps">
          <p className="how-it-works-step">
            <span>Get Started</span>
            Open the box, download the Braille Board app, and scan the QR code
            included in the packaging. This will guide you through creating your
            personal account quickly and easily.
          </p>
          <p className="how-it-works-step">
            <span>Connect the Braille Board</span>
            Power on your Braille Board and pair it with your smartphone via
            Bluetooth. Once connected, the app will take you through a 2-minute
            tutorial, showing you exactly how to use the keyboard for the best
            experience.
          </p>
          <p className="how-it-works-step">
            <span>Customize Your Settings</span>
            Within the app, configure the Braille Board to fit your needs. Add
            the languages you use, set up personalized hotkeys, and adjust other
            settings to make your experience as smooth as possible.
          </p>
        </div>
        <div className="how-it-works-image">
          <img src="#" alt="How it works" />
        </div>
        <div className="how-it-works-last-part">
          <p>Ready to Go!</p>
          <p>
            Use your Braille Board anytime, anywhere, in any language. Happy
            typing!
          </p>
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
