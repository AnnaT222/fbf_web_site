import "./Partners.css";
import AndranikPic from "./images/andranik.jpg";
import SipanPic from "./images/sipan.jpg";

function Partners() {
  return (
    <div className="partners">
      <div className="partners-content">
        <h1>Our Partners in Creation</h1>
        <p>Built Together, For the Community</p>
        <div className="partners-list">
          <div className="partners-list-item">
            <img src={SipanPic} alt="Sipan" />
            <p className="name-paragraph">Sipan</p>
            <p>
              "Being part of the Braille Board project has been incredibly
              rewarding. It's a product that truly understands our needs and
              makes technology accessible in a whole new way."
            </p>
          </div>
          <div className="partners-list-item">
            <img src={AndranikPic} alt="Andranik" />
            <p className="name-paragraph">Andranik</p>
            <p>
              "The collaboration with the team has been a journey of learning
              and innovation. Braille Board has made smartphone navigation so
              much faster and easier for us."
            </p>
          </div>
        </div>
        <div className="partners-text">
          <p style={{ textAlign: "justify" }}>
            "We believe that the best products are those created with the people
            they are designed for. From day one, we've worked hand in hand with
            visually impaired collaborators who have guided and shaped every
            step of the Braille Board. Their insights, feedback, and dedication
            have been instrumental in bringing this project to life."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Partners;