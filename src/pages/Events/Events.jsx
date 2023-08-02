import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);
dayjs.extend(customParseFormat);

import SaveTheDate from "../../img/saveTheDate.png";
import { gigStore } from "../../store/gigStore";
import { GlitchText } from "../../components/GlitchText/GlitchText";
import { sortDates } from "../../helpers/sortDates.js";

import "./Events.less";

export const Events = () => {
  const { t } = useTranslation();
  const [pastEventsSortedFormated, setPastEventsSortedFormated] = useState([]);
  const [upcomingEventsSortedFormated, setUpcomingEventsSortedFormated] =
    useState([]);

  const now = dayjs();
  let upcomingEvents = [];
  let pastEvents = [];

  const splitGigPerDate = () => {
    gigStore.gigs.map((gig) => {
      const gigDate = dayjs(gig.date, "YYYY-MM-DD");
      const gigIsInPast = dayjs(gigDate).isBefore(dayjs(now));
      if (gigIsInPast) {
        pastEvents.push(gig);
      } else {
        upcomingEvents.push(gig);
      }
    });
  };

  useEffect(() => {
    upcomingEvents = [];
    pastEvents = [];

    splitGigPerDate();
    const upcomingEventsSorted = sortDates(upcomingEvents, true);
    const pastEventsSorted = sortDates(pastEvents, false);

    const pastEventsSortedFormated = pastEventsSorted.map((gig, index) => {
      return (
        <div className="row" key={`pastEvent${index}`}>
          <div className="col_left strikeThrough">
            {dayjs(gig.date, "YYYY-MM-DD").format("DD.MM.YY")}, {gig.location}
          </div>
          <div className="col_mid"></div>
          <div className="col_right strikeThrough">{gig.name}</div>
        </div>
      );
    });
    setPastEventsSortedFormated(pastEventsSortedFormated);

    const upcomingEventsSortedFormated = upcomingEventsSorted.map(
      (gig, index) => {
        const handleEventClick = () => {
          if (gig.raEventNumber) {
            window.open(`https://ra.co/events/${gig.raEventNumber}`, "_blank");
          }
        };
        return (
          <div
            className={`row ${gig.raEventNumber && "link"}`}
            key={`upcomingEvent${index}`}
            onClick={handleEventClick}
          >
            <div className="col_left">
              {dayjs(gig.date, "YYYY-MM-DD").format("DD.MM")}, {gig.location}
            </div>
            <div className="col_mid"></div>
            <div className="col_right">{gig.name}</div>
          </div>
        );
      }
    );
    setUpcomingEventsSortedFormated(upcomingEventsSortedFormated);
  }, []);

  return (
    <div className="eventsContainer">
      <div className="background"></div>
      <div className="backgroundOpacity"></div>
      <div className="backgroundDegrade"></div>
      <img src={SaveTheDate} className="imgSavetheDate" />
      <GlitchText
        glitchText={t("events.shows")}
        overText={t("events.ourNext")}
      />
      <div className="content">
        <div className="title">{t("events.upcoming")}</div>
        <div className="table">{upcomingEventsSortedFormated}</div>
        <div className="title">{t("events.past")}</div>
        <div className="table">{pastEventsSortedFormated}</div>
      </div>
    </div>
  );
};
