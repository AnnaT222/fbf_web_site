import React from "react";
import { FaPhone, FaUsers, FaPercent } from "react-icons/fa"; // Import icons
import "./Games.css";
const Lifelines = ({ lifelines, setLifelines }) => {
  return (
    <div className="lifelines">
      {lifelines.fiftyFifty && (
        <button
          className="lifeline-button fifty-fifty"
          onClick={() => setLifelines({ ...lifelines, fiftyFifty: false })}
        >
          <FaPercent size={30} />
        </button>
      )}
      {lifelines.phoneAFriend && (
        <button
          className="lifeline-button phone-friend"
          onClick={() => setLifelines({ ...lifelines, phoneAFriend: false })}
        >
          <FaPhone size={30} />
        </button>
      )}
      {lifelines.askAudience && (
        <button
          className="lifeline-button ask-audience"
          onClick={() => setLifelines({ ...lifelines, askAudience: false })}
        >
          <FaUsers size={30} />
        </button>
      )}
    </div>
  );
};

export default Lifelines;
