import "./BrilleBoardIntro.css";
import BrailleBoardImage from "./images/braille.png";

function BrilleBoardIntro() {
  return (
    <div class="brille-board">
      <div class="brille-board-image">
        <img src={BrailleBoardImage} alt="Braille Board" />
      </div>
      <div class="brille-board-text">
        <h1>Brille Board</h1>
        <span>Is your dream to be fast?</span>
        <p>
          BB is a Braille keyboard that resembles a power bank with MagSafe
          functionality. It simply attaches to the back of your smartphone,
          enabling you to type in any language and navigate quickly.
        </p>
        <div class="brille-board-button">
          <button>Take it</button>
        </div>
      </div>
    </div>
  );
}
export default BrilleBoardIntro;
