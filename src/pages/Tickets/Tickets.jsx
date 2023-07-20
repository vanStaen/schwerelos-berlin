import React from "react";

import { GlitchText } from "../../components/GlitchText/GlitchText";
import { QrCodeGenerator } from "./QrCodeGenerator/QrCodeGenerator"

import "./Tickets.less";

export const Tickets = () => {

  return (
    <div className="pageTicketContainer">
      <div className="ticketContainer">
        <GlitchText overText="want some" glitchText="Tickets?" />
        <QrCodeGenerator route="ticket" event="charityrave" />
      </div>
    </div>
  );
};
