import React, { useState } from "react";
import { Button } from "antd";
import QRCode from 'qrcode.react';
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const QrCodeGenerator = (props) => {
    const { route, event } = props;
    const [ticketNumberValue, setTicketNumberValue] = useState(1);
    const [qrCodeValue, setQrCodeValue] = useState("https://schwerelos-berlin.com/" + route + "/" + event + "/" + uuidv4());

    const handleGenerateButtonClick = () => {
        try {
            const ticketIdValue = uuidv4();
            setQrCodeValue("https://schwerelos-berlin.com/ticketvalidation/ticket/" + route + "/" + event + "/" + ticketIdValue);
            saveTicketIdInDatabase(ticketIdValue);
            downloadQrCode();
        } catch (e) {
            throw new Error(`Error! ${e}`);
        }
    };

    const downloadQrCode = () => {
        const qrCodeURL = document.getElementById('qrCodeGenerated')
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = `schwerelos_ticket_${event}${ticketNumberValue}.png`;
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
        setTicketNumberValue(ticketNumberValue + 1);
    }

    const saveTicketIdInDatabase = async (ticketIdValue) => {
        const apiUrl = process.env.API_URL + "/ticket";
        console.log(apiUrl);

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
