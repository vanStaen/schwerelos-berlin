import React from "react";
import { observer } from "mobx-react";
import { GlitchText } from "../../components/GlitchText/GlitchText";

import "./Tickets.less";

export const Tickets = observer(() => {
  return (
    <div className="pageContainer">
      <GlitchText overText="want some" glitchText="Tickets?" />
    </div>
  );
});