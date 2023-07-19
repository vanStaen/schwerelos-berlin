import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button } from "antd";
import QRCode from "react-qr-code";
import { v4 as uuidv4 } from "uuid";

import { GlitchText } from "../../components/GlitchText/GlitchText";

import "./Tickets.less";

export const Tickets = observer(() => {
  const [qrCodeValue, setQrCodeValue] = useState(
    process.env.API_URL + "/ticketvalidation/" + uuidv4()
  );

  const handleButtonClick = () => {
    setQrCodeValue(process.env.API_URL + "/ticketvalidation/" + uuidv4());
  };

  return (
    <div className="pageTicketContainer">
      <div className="ticketContainer">
        <GlitchText overText="want some" glitchText="Tickets?" />
        <div
          style={{
            height: "auto",
            margin: "50px auto 0 auto",
            maxWidth: "50vw",
            maxHeight: "50vh",
            width: "100%",
            border: "1px solid red",
          }}
        >
          <QRCode
            size={256}
            style={{
              maxHeight: "50vh",
              height: "100%",
              maxWidth: "50vw",
              width: "100%",
            }}
            value={qrCodeValue}
            viewBox={`0 0 256 256`}
          />
          <br />
          <br />
          <Button size="large" onClick={handleButtonClick}>
            Generate new ticket
          </Button>
        </div>
      </div>
    </div>
  );
});
