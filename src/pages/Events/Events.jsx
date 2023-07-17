import React from "react";
import dayjs from "dayjs";

import SaveTheDate from "../../img/saveTheDate.png";
import { gigStore } from "../../store/gigStore";

import "./Events.less";

export const Events = () => {
  const now = dayjs();

  let upcommingEvents = [];
  let pastEvents = [];

  gigStore.gigs.map((gig) => {
    const gigDate = dayjs(gig.date, "YYYY-MM-DD");
    const gigIsInPast = dayjs(gigDate).isBefore(dayjs(now));

    if (gigIsInPast) {
      pastEvents.push(
        <div className="row">
          <div className="col_left strikeThrough">
            {dayjs(gig.date, "YYYY-MM-DD").format("DD.MM")}, {gig.location}
          </div>
          <div className="col_mid"></div>
          <div className="col_right strikeThrough">{gig.name}</div>
        </div>
      );
    } else {
      const handleEventClick = () => {
        window.open(`https://ra.co/events/${gig.raEventNumber}`, "_blank");
      };
      upcommingEvents.push(
        <div className="row link" onClick={handleEventClick}>
          <div className="col_left">
            {dayjs(gig.date, "YYYY-MM-DD").format("DD.MM")}, {gig.location}
          </div>
          <div className="col_mid"></div>
          <div className="col_right">{gig.name}</div>
        </div>
      );
    }
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
