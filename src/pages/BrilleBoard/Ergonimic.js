import "./Ergonomic.css";

function Ergonomic() {
  return (
    <section className="ergonomic">
      <div className="section-container">
        <div className="ergonomic-text">
          <h1>Ergonomic</h1>

          <div
            role="paragraph"
            tabIndex="0"
            aria-label="Ergonomic design description"
            className="accessible-paragraph"
          >
            The ergonomic design was made taking into account the order of use
            and places. It touches the smartphone using MagSafe technology. If
            necessary, it can be separated and used with a remote and various
            gadgets.
          </div>
        </div>
        <div className="ergonomic-animation">
          <div className="morph-shape"></div>
        </div>
      </div>
    </section>
  );
}

export default Ergonomic;
