import React from "react";

import { GlitchText } from "../../../components/GlitchText/GlitchText";

import "./CharityRave.less";

export const CharityRave = () => {
  return (
    <div className="pageRaveContainer">
      <div className="raveContainer">
        <GlitchText
          overText={
            <>
              schwerelos <em>low gravity</em>
            </>
          }
          glitchText="Charity Rave"
        />
      </div>
    </div>
  );
};
