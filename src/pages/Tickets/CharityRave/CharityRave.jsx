import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import { GlitchText } from "../../../components/GlitchText/GlitchText";
import schwerelosLogo from "../../../img/schwerelosLogo.png";
import graphic1 from "../../../img/graphics/graphic1.png";
import graphic2 from "../../../img/graphics/graphic2.png";
import graphic3 from "../../../img/graphics/graphic3.png";
import graphic4 from "../../../img/graphics/graphic4.png";
import residentAdvisorLogo from "../../../img/logos/residentAdvisorLogo.png";

import "./CharityRave.less";

export const CharityRave = () => {
  const raveDate = dayjs("2023-09-02 18:00");
  const [countdown, setCountdown] = useState("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const diff = raveDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown(
        days + "d " + hours + "h " + minutes + "m " + seconds + "s "
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <GlitchText
        overText={
          <>
            schwerelos <em>low gravity</em>
          </>
        }
        glitchText="Charity Rave"
      />
      <div className="pageRaveContainer">
        <div className="raveContainer">
          <Link to=".." reloadDocument>
            <img src={schwerelosLogo} className="schwerelosLogo" />
          </Link>
          <div className="raveCharityDatumContainer">
            <div className="raveCharityInlineBlock">
              <div className="raveCharityTextBig">02</div>
              <div>SEP</div>
            </div>
            <div className="raveCharityInlineBlock">
              <div className="raveCharityTextBig">18</div>
              <div>UHR</div>
            </div>
            <div className="raveCharityCountdown">{countdown}</div>
          </div>
          <span className="raveCharityTitle">CHARITY LOW GRAVITY</span>
          <span className="raveCharityDisclaimer">
            Alle Gewinne der Veranstaltung gehen an die{" "}
            <b>Berliner Stadtmission</b>
          </span>
          <div className="raveCharityTextlocation">Secret nature Location</div>
          <div className="raveCharityLineUp">
            <div>GREENLAKE PROJECT [3000 Grad]</div>
            <div>TONI HAUPT [Telekollegen]</div>
            <div>SHLOMSEN [Sisyphos]</div>
            <div>SOMMERSONNEWENDE</div>
            <div>MEEMA</div>
            <div>LUKAS EDLER</div>
            <div>VAN STAEN</div>
            <div>JOHANNES HILLMER</div>
            <div>MISSING DJ</div>
            <div>NOSTIQUE</div>
          </div>
          <a href="https://ra.co/events/1724976" target="_blank">
            <img src={residentAdvisorLogo} className="raLogo" />
          </a>
          <img src={graphic1} className="graphicElement1" />
          <img src={graphic2} className="graphicElement2" />
          <img src={graphic3} className="graphicElement3" />
          <img src={graphic4} className="graphicElement4" />
        </div>
      </div>
    </>
  );
};
