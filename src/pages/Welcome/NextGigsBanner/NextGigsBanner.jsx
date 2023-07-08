import React from "react";
import { observer } from "mobx-react";

import { gigStore } from "../../../store/gigStore";

import "./NextGigsBanner.less";

export const NextGigsBanner = observer(() => {
  const gigHtml = gigStore.gigs.map((gig, index) => {
    if (index + 1 === gigStore.gigs.length) {
      return (
        <>
          <a href={`https://ra.co/events/${gig.raEventNumber}`}>
            {gig.date} | {gig.location}
          </a>
        </>
      );
    } else {
      return (
        <>
          <a href={`https://ra.co/events/${gig.raEventNumber}`}>
            {gig.date} | {gig.location}
          </a>
          <span className="opacity">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
        </>
      );
    }
  });

  return (
    <p>
      <marquee className="marquee-container">
        <span className="opacity">
          Upcoming events:&nbsp;&nbsp;
        </span>
        {gigHtml}
      </marquee>
    </p>
  );
});
