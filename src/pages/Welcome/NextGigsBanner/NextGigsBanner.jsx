import React from "react";
import { observer } from "mobx-react";

import { gigStore } from "../../../store/gigStore";
import { cubeSliderStore } from "../../../components/CubeSlider/cubeSliderStore";

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
        <span className="title" onClick={() => cubeSliderStore.showRight(1)}>
          Upcoming events
        </span>
        :&nbsp;&nbsp;
        {gigHtml}
      </marquee>
    </p>
  );
});
