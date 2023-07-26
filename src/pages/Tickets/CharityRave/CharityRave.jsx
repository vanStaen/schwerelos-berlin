import React, { useState } from "react";

import { GlitchText } from "../../../components/GlitchText/GlitchText";
import { LoginForm } from "../../../components/LoginForm/LoginForm";
import schwerelosLogo from "../../../img/schwerelosLogo.png";
import graphic1 from "../../../img/graphics/graphic1.png";
import graphic2 from "../../../img/graphics/graphic2.png";
import graphic3 from "../../../img/graphics/graphic3.png";
import graphic4 from "../../../img/graphics/graphic4.png";
import residentAdvisorLogo from "../../../img/logos/residentAdvisorLogo.png";

import "./CharityRave.less";

export const CharityRave = () => {
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
          <img src={schwerelosLogo} className="schwerelosLogo" />
          <div className="raveCharityDatumContainer">
            <div className="raveCharityInlineBlock">
              <div className="raveCharityTextBig">02</div>
              <div>SEP</div>
            </div>
            <div className="raveCharityInlineBlock">
              <div className="raveCharityTextBig">18</div>
              <div>UHR</div>
            </div>
          </div>
          <span className="raveCharityTitle">CHARITY LOW GRAVITY</span>
          <span className="raveCharityDisclaimer">
            Alle gewinne der Veranstaltung gehen an die{" "}
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
