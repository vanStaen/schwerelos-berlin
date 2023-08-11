import React from "react";
import dayjs from "dayjs";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

import { gigStore } from "../../../store/gigStore";
import { cubeSliderStore } from "../../../components/CubeSlider/cubeSliderStore";
import { sortDates } from "../../../helpers/sortDates";

import "./NextGigsBanner.less";

export const NextGigsBanner = observer(() => {
  const { t } = useTranslation();
  const now = dayjs();
  const events = gigStore.gigs.slice();
  const eventsSorted = sortDates(events, true);

  const gigHtml = eventsSorted.map((gig) => {
    const gigDate = dayjs(gig.date, "YYYY-MM-DD");
    const gigIsInPast = dayjs(gigDate).isBefore(dayjs(now));

    if (!gigIsInPast) {
      return (
        <>
          {gig.raEventNumber ? (
            <a href={`https://ra.co/events/${gig.raEventNumber}`}>
              {dayjs(gig.date, "YYYY-MM-DD").format("DD.MM")} | {gig.location}
            </a>
          ) : gig.link ? (
            <a href={gig.link}>
              {dayjs(gig.date, "YYYY-MM-DD").format("DD.MM")} | {gig.location}
            </a>
          ) : (
            <>
              {dayjs(gig.date, "YYYY-MM-DD").format("DD.MM")} | {gig.location}
            </>
          )}
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
            {t("welcome.upcomingEvent")}
          </span>
          &nbsp;:&nbsp;&nbsp;
          {gigHtmlCleaned}
        </marquee>
      )}
    </p>
  );
});
