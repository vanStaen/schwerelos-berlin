import React from "react";

import { GlitchText } from "../../../components/GlitchText/GlitchText";
import schwerelosLogo from "../../../img/schwerelosLogo.png";
import graphic1 from "../../../img/graphics/graphic1.png";
import graphic2 from "../../../img/graphics/graphic2.png";
import graphic3 from "../../../img/graphics/graphic3.png";
import graphic4 from "../../../img/graphics/graphic4.png";

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
        <img src={schwerelosLogo} className="graphicLogo" />
        <img src={graphic1} className="graphicElement1" />
        <img src={graphic2} className="graphicElement2" />
        <img src={graphic3} className="graphicElement3" />
        <img src={graphic4} className="graphicElement4" />
        <div className="raveContainer">
          <span className="raveCharityDisclaimer">
            Alle gewinne der Veranstaltung gehen an der{" "}
            <b>Berliner Stadtmission</b>
          </span>
        </div>
      </div>
    </>
  );
};
