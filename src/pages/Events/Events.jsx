import React from "react";

import SaveTheDate from "../../img/saveTheDate.png";
import { gigStore } from "../../store/gigStore";

import "./Events.less";

export const Events = () => {
  const upcommingEvents = gigStore.gigs.map((gig) => {
    const handleEventClick = () => {
      window.open(`https://ra.co/events/${gig.raEventNumber}`, "_blank");
    };

    return (
      <div className="row" onClick={handleEventClick}>
        <div className="col_left">
          {gig.date}, {gig.location}
        </div>
        <div className="col_mid"> | </div>
        <div className="col_right">{gig.name}</div>
      </div>
    );
  });

  const pastEvents = gigStore.gigs.map((gig) => {
    return (
      <div className="row">
        <div className="col_left">
          {gig.date}, {gig.location}
        </div>
        <div className="col_mid"> | </div>
        <div className="col_right">{gig.name}</div>
      </div>
    );
  });

  return (
    <div className="eventsContainer">
      <div className="background"></div>
      <div className="backgroundOpacity"></div>
      <img src={SaveTheDate} className="imgSavetheDate" />
      <div className="content">
        <div className="title">Upcomming</div>
        <div className="table">{upcommingEvents}</div>
        <div className="title">Past</div>
        <div className="table">{pastEvents}</div>
      </div>
    </div>
  );
};
