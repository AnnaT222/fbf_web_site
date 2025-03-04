import "./QuickNavigation.css";

function QuickNavigation() {
  return (
    <div className="quick-navigation">
      <div className="quick-navigation-animation">
        <svg className="svg-container" viewBox="0 0 290 100">
          {/* <path
            d="M 10,150 A 120 120 0 0 1 270 150 A 120 120 0 0 1 10 150"
            stroke="#00ff26"
            strokeWidth="2"
            fill="transparent"
          /> */}
        </svg>
        <div className="moving-circle"></div>
      </div>
      <div className="quick-navigation-text">
        <h1>Quick Navigation</h1>
        <p>
          Navigation keys can be used to quickly access any application, return
          to the main screen or make calls.
        </p>
      </div>
    </div>
  );
}

export default QuickNavigation;