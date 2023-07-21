import React from "react";

import { GlitchText } from "../../components/GlitchText/GlitchText";

import "./Tickets.less";

export const CharityRave = () => {
  return (
    <div className="pageTicketContainer">
      <div className="ticketContainer">
        <GlitchText overText="schwerelos presents" glitchText="Charity Rave" />
      </div>
    </div>
  );
};
