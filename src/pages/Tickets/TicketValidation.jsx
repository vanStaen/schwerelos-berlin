import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import { GlitchText } from "../../components/GlitchText/GlitchText";
import { CustomLoader } from "../../components/CustomLoader/CustomLoader";

import "./Tickets.less";

export const TicketValidation = () => {
  let { ticketId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const element = document.getElementById("pageTicketContainer");
    isLoading
      ? (element.style.backgroundColor = "Black")
      : isValid
      ? (element.style.backgroundColor = "LimeGreen")
      : (element.style.backgroundColor = "FireBrick");
  }, [isLoading, isValid]);

  return (
    <div id="pageTicketContainer" className="pageTicketContainer">
      <GlitchText
        overText={
          isLoading
            ? "Checking that"
            : isValid
            ? "This ticket is"
            : "No-go, my friend!"
        }
        glitchText={isLoading ? "Ticket" : isValid ? "Valid" : "Invalid"}
      />
      {isLoading ? (
        <>
          <CustomLoader />
          <div className="ticketId">
            <div style={{ opacity: 0.4 }}>ticket id </div>
            {ticketId}
          </div>
        </>
      ) : (
        <>
          <div className="ticketValidationContainer">
            {isValid ? (
              <CheckOutlined className="icon" />
            ) : (
              <CloseOutlined className="icon" />
            )}
            <div className="ticketId">
              <div style={{ opacity: 0.4 }}>ticket id </div>
              {ticketId}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
