import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);
dayjs.extend(customParseFormat);

import SaveTheDate from "../../img/saveTheDate.png";
import { gigStore } from "../../store/gigStore";

import "./Events.less";

export const Events = () => {
  const [pastEventsSortedFormated, setPastEventsSortedFormated] = useState([]);
  const [upcommingEventsSortedFormated, setUpcommingEventsSortedFormated] =
    useState([]);

  const now = dayjs();
  let upcommingEvents = [];
  let pastEvents = [];

  const splitGigPerDate = () => {
    gigStore.gigs.map((gig) => {
      const gigDate = dayjs(gig.date, "YYYY-MM-DD");
      const gigIsInPast = dayjs(gigDate).isBefore(dayjs(now));
      if (gigIsInPast) {
        pastEvents.push(gig);
      } else {
        upcommingEvents.push(gig);
      }
    });
  };

  const sortDate = (array, chrono) => {
    array.sort((a, b) => {
      const isSameOfBefore = dayjs(a.date).isSameOrBefore(dayjs(b.date));
      if (isSameOfBefore) {
        return chrono ? -1 : 1;
      } else {
        return chrono ? 1 : -1;
      }
    });
    return array;
  };

  useEffect(() => {
    splitGigPerDate();
    const upcommingEventsSorted = sortDate(upcommingEvents, true);
    const pastEventsSorted = sortDate(pastEvents, false);

    const pastEventsSortedFormated = pastEventsSorted.map((gig) => {
      return (
        <div className="row">
          <div className="col_left strikeThrough">
            {dayjs(gig.date, "YYYY-MM-DD").format("DD.MM.YY")}, {gig.location}
          </div>
          <div className="col_mid"></div>
          <div className="col_right strikeThrough">{gig.name}</div>
        </div>
      );
    });
    setPastEventsSortedFormated(pastEventsSortedFormated);

    const upcommingEventsSortedFormated = upcommingEventsSorted.map((gig) => {
      const handleEventClick = () => {
        window.open(`https://ra.co/events/${gig.raEventNumber}`, "_blank");
      };
      return (
        <div className="row link" onClick={handleEventClick}>
          <div className="col_left">
            {dayjs(gig.date, "YYYY-MM-DD").format("DD.MM")}, {gig.location}
          </div>
          <div className="col_mid"></div>
          <div className="col_right">{gig.name}</div>
        </div>
      );
    });
    setUpcommingEventsSortedFormated(upcommingEventsSortedFormated);
  }, []);

  /*
  

  
  */

  return (
    <div className="eventsContainer">
      <div className="background"></div>
      <div className="backgroundOpacity"></div>
      <img src={SaveTheDate} className="imgSavetheDate" />
      <div className="content">
        <div className="title">Upcomming</div>
        <div className="table">{upcommingEventsSortedFormated}</div>
        <div className="title">Past</div>
        <div className="table">{pastEventsSortedFormated}</div>
      </div>
    </div>
  );
};
