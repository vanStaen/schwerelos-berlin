import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GlitchText } from "../../components/GlitchText/GlitchText";
import { CustomLoader } from "../../components/CustomLoader/CustomLoader"

import "./Tickets.less";

export const TicketValidation = () => {
  let { ticketId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const element = document.getElementById("pageTicketContainer");
    isLoading ? element.style.backgroundColor = "Silver" :
      isValid ? element.style.backgroundColor = "Lime" : element.style.backgroundColor = "Tomato";
  }, [isLoading, isValid])

  return (
    <div id="pageTicketContainer" className="pageTicketContainer">
      <GlitchText overText="Check that" glitchText="Tickets" />
      {isLoading ?
        <CustomLoader /> :
        <div className="ticketContainer">Your ticket ID is : {ticketId}</div>
      }
    </div>);
};
