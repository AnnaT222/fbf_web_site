import "./BrilleBoardIntro.css";
import BrailleBoardImage from "./images/braille.png";

function BrilleBoardIntro() {
  return (
    <div>
      <div className="brille-board">
        <img src={BrailleBoardImage} alt="Braille Board" style={{backgroundColor:"#131313"}} />{" "}
        <div className="brille-board-text">
          <h1>Brille Board</h1>
          <span>Is your dream to be fast?</span>
          <p>
            BB is Brille keyboard that resembles a power bank with MagSafe
            functionality. It simply attaches to the back of your smartphone,
            enabling you to type in any language and navigate quickly.
          </p>
        </div>
      </div>
      <div className="brille-board-button">
        <button>Take it!</button>
      </div>
    </div>
  );
}
export default BrilleBoardIntro;
