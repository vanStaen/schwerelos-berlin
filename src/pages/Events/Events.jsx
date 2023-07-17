import React from "react";

import SaveTheDate from "../../img/saveTheDate.png";

import "./Events.less";

export const Events = () => {
  return (
    <div className="eventsContainer">
      <div className="background"></div>
      <div className="backgroundOpacity"></div>
      <img src={SaveTheDate} className="imgSavetheDate" />
      <div className="content">
        <div>Upcomming</div>
        <div>Past</div>
      </div>
    </div>
  );
};
