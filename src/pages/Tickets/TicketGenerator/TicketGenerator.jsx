import React, { useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import QRCode from "qrcode.react";
import { Button } from "antd";
import { v4 as uuidv4 } from "uuid";

import "./TicketGenerator.less";

export const TicketGenerator = (props) => {
  const { route, event } = props;
  const [ticketNumberValue, setTicketNumberValue] = useState(1);
  const [qrCodeValue, setQrCodeValue] = useState(null);

  const formatTicketNumber = () => {
    if (ticketNumberValue > 99) {
      return `${ticketNumberValue}`;
    } else if (ticketNumberValue > 9) {
      return `0${ticketNumberValue}`;
    } else {
      return `00${ticketNumberValue}`;
    }
  };
  const handleGenerateButtonClick = () => {
    try {
      const ticketIdValue = uuidv4();
      setQrCodeValue(
        "https://schwerelos-berlin.com/" +
          route +
          "/" +
          event +
          "/" +
          ticketIdValue
      );
      //saveTicketIdInDatabase(ticketIdValue);
      downloadQrCode();
    } catch (e) {
      throw new Error(`Error! ${e}`);
    }
  };

  const downloadQrCode = () => {
    // const ticketUrl = document
    //   .getElementById("qrCodeGenerated")
    //   .toDataURL("image/png")
    //   .replace("image/png", "image/octet-stream");
    // let aEl = document.createElement("a");
    // aEl.href = ticketUrl;
    // aEl.download = `schwerelos_ticket_${event}${ticketNumberValue}.png`;
    // document.body.appendChild(aEl);
    // aEl.click();
    // document.body.removeChild(aEl);

    var ticketElement = document.getElementById("qrCodeGenerated");
    html2canvas(ticketElement, { allowTaint: true }).then((canvas) => {
      let link = document.createElement("a");
      document.body.appendChild(link);
      link.download = `schwerelos_ticket_${event}${formatTicketNumber()}.png`;
      link.href = canvas.toDataURL();
      link.target = "_blank";
      link.click();
      document.body.removeChild(link);
    });

    setTicketNumberValue(ticketNumberValue + 1);
  };

  const saveTicketIdInDatabase = async (ticketIdValue) => {
    const apiUrl = process.env.API_URL + "/ticket";

    const response = await axios(
      {
        url: apiUrl,
        method: "POST",
        data: { ticketId: ticketIdValue },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if ((response.status !== 200) & (response.status !== 201)) {
      if (response.status === 401) {
        throw new Error(`Error! Unauthorized(401)`);
      } else {
        throw new Error(`Error! Status ${response.status}`);
      }
    }
  };

  return (
    <div className="qrCodeMainContainer">
      <div className="qrCodeContainer" id={"qrCodeGenerated"}>
        <div className="ticketText textTop">
          Schwerelos Charity <em>low gravity</em> open-air
        </div>
        <div className="ticketText textRight">www.schwerelos-berlin.com</div>
        <QRCode
          size={256}
          style={{
            height: "480px",
            width: "480px",
          }}
          value={qrCodeValue}
          viewBox={`0 0 256 256`}
        />
        <div className="ticketText textLeft">
          Ticket number #{formatTicketNumber()}
        </div>
        <div className="ticketText textBottom">
          Scan the qr-code to get more information
        </div>
      </div>
      <br />
      <Button size="large" onClick={handleGenerateButtonClick}>
        Generate and download new ticket
      </Button>
    </div>
  );
};
