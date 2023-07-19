import React, { useState } from "react";
import { observer } from "mobx-react";
import { Input } from "antd";
import QRCode from "react-qr-code";

import { GlitchText } from "../../components/GlitchText/GlitchText";

import "./Tickets.less";

export const Tickets = observer(() => {
  const [qrCodeValue, setQrCodeValue] = useState("https://github.com/vanStaen");

  const handleInputEnter = (event) => {
    setQrCodeValue(event.target.value);
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
          <Input
            size="large"
            placeholder={qrCodeValue}
            onPressEnter={(event) => handleInputEnter(event)}
          />
        </div>
      </div>
    </div>
  );
});
