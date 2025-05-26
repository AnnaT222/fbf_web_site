import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="how-it-works">
      <h1>How It Works</h1>

      <div className="how-it-works-steps">
        <div className="how-it-works-step">
          <p>
            <span>Get Started</span>
            Open the box, download the Braille Board app, and scan the QR code
            included in the packaging. This will guide you through creating your
            personal account quickly and easily.
          </p>
        </div>

        <div className="how-it-works-step">
          <p>
            <span>Connect the Braille Board</span>
            Power on your Braille Board and pair it with your smartphone via
            Bluetooth. Once connected, the app will take you through a 2-minute
            tutorial, showing you exactly how to use the keyboard for the best
            experience.
          </p>
        </div>

        <div className="how-it-works-step">
          <p>
            <span>Customize Your Settings</span>
            Within the app, configure the Braille Board to fit your needs. Add
            the languages you use, set up personalized hotkeys, and adjust other
            settings to make your experience as efficient as possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;