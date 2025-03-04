import React from "react";
import "./BrilleBoard.css";
import Ergonomic from "./Ergonimic";
import QuickNavigation from "./QuickNavigation";
import LanguageAvailability from "./LanguageAvailability";
import Demo from "./Demo";
import HowItWorks from "./HowItWorks";
import EmailSignUp from "./EmailSignUp";
import Partners from "./Partners";
import BrilleBoardIntro from "./BrilleBoardIntro";

function BrilleBoard() {
  return (
    // ------------------brille board intro------------------------------
    <div>
      <BrilleBoardIntro />
      {/* ------------------brille board features components------------------------------ */}
      <div className="brille-board-features">
        <Ergonomic />
        <QuickNavigation />
        <LanguageAvailability />
      </div>
      {/* -----------------------other components------------------------- */}
      <Demo />
      <HowItWorks />
      <EmailSignUp />
      <Partners />
    </div>
  );
}

export default BrilleBoard;
