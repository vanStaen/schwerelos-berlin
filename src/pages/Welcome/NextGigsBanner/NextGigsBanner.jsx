import React from "react";
import { observer } from "mobx-react";
import dayjs from "dayjs";

import { gigStore } from "../../../store/gigStore";
import { cubeSliderStore } from "../../../components/CubeSlider/cubeSliderStore";

import "./NextGigsBanner.less";

export const NextGigsBanner = observer(() => {
  const now = dayjs();

  const gigHtml = gigStore.gigs.map((gig) => {
    const gigDate = dayjs(gig.date, "YYYY-MM-DD");
    const gigIsInPast = dayjs(gigDate).isBefore(dayjs(now));

    if (!gigIsInPast) {
      return (
        <>
          <a href={`https://ra.co/events/${gig.raEventNumber}`}>
            {dayjs(gig.date, "YYYY-MM-DD").format("DD.MM")} | {gig.location}
          </a>
          <span className="opacity">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
        </>
      );
    }
  });

  const gigHtmlCleaned = gigHtml.filter((x) => x !== undefined);

  return (
    <p>
      {gigHtmlCleaned.length !== 0 && (
        <marquee className="marquee-container">
          <span className="title" onClick={() => cubeSliderStore.showRight(1)}>
            Upcoming events
          </span>
          &nbsp;:&nbsp;&nbsp;
          {gigHtmlCleaned}
        </marquee>
      )}
    </p>
  );
});
