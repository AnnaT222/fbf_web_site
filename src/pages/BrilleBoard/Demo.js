import "./Demo.css";
import YouTubeEmbed from "./YouTubeEmbed";
function Demo() {
  return (
    <div className="demo">
      <div className="demo-text">
        <h1>Watch demo</h1>
        <p>
          The Braille Board has changed how I use my phone - it's so much faster
          and easier!
        </p>
        <span>Check out more videos on our YouTube channel.</span>
      </div>
      <div className="demo-video">
        <YouTubeEmbed videoId="I_KjqAxO_8E" />
          <button>
            <a
              href="https://www.youtube.com/@FBF-LLC"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe
            </a>
          </button>
      </div>
    </div>
  );
}
export default Demo;
