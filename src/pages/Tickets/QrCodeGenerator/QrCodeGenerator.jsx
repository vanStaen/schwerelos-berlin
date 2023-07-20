import React, { useState } from "react";
import { Button } from "antd";
import QRCode from 'qrcode.react';
import { v4 as uuidv4 } from "uuid";

export const QrCodeGenerator = (props) => {
    const { route, event } = props;
    const [ticketIdValue, setTicketIdValue] = useState(uuidv4());
    const [ticketNumberValue, setTicketNumberValue] = useState(1);
    const [qrCodeValue, setQrCodeValue] = useState("https://schwerelos-berlin.com/" + route + "/" + event + "/" + ticketIdValue);

    const handleGenerateButtonClick = () => {
        setTicketIdValue(uuidv4());
        setQrCodeValue("https://schwerelos-berlin.com/ticketvalidation/ticket/" + route + "/" + event + "/" + ticketIdValue);
        downloadQrCode();
    };

    const downloadQrCode = () => {
        const qrCodeURL = document.getElementById('qrCodeGenerated')
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = `SchwerelosTicket_${ticketNumberValue}.png`;
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
        setTicketNumberValue(ticketNumberValue + 1);
    }

    const saveTicketIdInDatabase = () => {
        //todo api call
    }


    return (
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
                id={"qrCodeGenerated"}
                style={{
                    height: "100%",
                    maxWidth: "50vw",
                }}
                value={qrCodeValue}
                viewBox={`0 0 256 256`}
            />
            <br />
            <Button size="large" onClick={handleGenerateButtonClick}>
                Generate and download new ticket
            </Button>
        </div>
    );
};
