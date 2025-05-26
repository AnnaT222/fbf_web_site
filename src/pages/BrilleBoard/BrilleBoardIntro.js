import "./BrilleBoardIntro.css";
import BrailleBoardImage from "./images/braille.png";

function BrilleBoardIntro() {
  return (
    <section className="brille-board">
      <div className="section-container">
        <div className="brille-board-left">
          <img src={BrailleBoardImage} alt="Braille Board" />
        </div>
        <div className="brille-board-right">
          <h1>Braille Board</h1>
          <span>Is your dream to be fast?</span>

          <div
            role="paragraph"
            tabIndex="0"
            aria-label="Braille Board description"
            className="accessible-paragraph"
          >
            BB is a Braille keyboard that resembles a power bank with MagSafe
            functionality. It simply attaches to the back of your smartphone,
            enabling you to type in any language and navigate quickly.
          </div>

          <button>Take it</button>
        </div>
      </div>
    </section>
  );
}
export default BrilleBoardIntro;
