import React from "react";
import { observer } from "mobx-react";
import { GlitchText } from "../../components/GlitchText/GlitchText";

import "./Merch.less";

export const Merch = observer(() => {
  return (
    <div className="pageMerchContainer">
      <div className="merchContainer">
        <GlitchText glitchText="Merch" overText="you need" />
      </div>
    </div>
  );
});
