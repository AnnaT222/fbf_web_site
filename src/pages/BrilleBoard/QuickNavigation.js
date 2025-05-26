import "./QuickNavigation.css";

function QuickNavigation() {
  return (
    <div className="quick-navigation">
      <div className="quick-navigation-animation">
        <svg className="svg-container" viewBox="0 0 290 100">
          {/* You can uncomment the path below if you want to visualize it */}
          {/* <path d="M 10,150 A 120 120 0 0 1 270 150 A 120 120 0 0 1 10 150" stroke="#00ff26" strokeWidth="2" fill="transparent" /> */}
        </svg>
        <div className="moving-circle" aria-hidden="true"></div>
      </div>
      <div className="quick-navigation-text">
        <h1>Quick Navigation</h1>
        <div
          role="paragraph"
          tabIndex="0"
          aria-label="Quick navigation description"
          className="accessible-paragraph"
        >
          Navigation keys can be used to quickly access any application,
          return to the main screen or make calls.
        </div>
      </div>
    </div>
  );
}

export default QuickNavigation;
