import React from "react";
import { useParams } from "react-router-dom";

import { CubeSlider } from "../components/CubeSlider/CubeSlider";
import { Welcome } from "./Welcome/Welcome";
import { Artist } from "./Artist/Artist";
import { Events } from "./Events/Events";
import { Merch } from "./Merch/Merch";
import { CharityRave } from "./Tickets/CharityRave/CharityRave";
import { showDev } from "../helpers/showDev";
import { FourOfour } from "./FourOfour/FourOfour";

export const Main = () => {
  const params = useParams();
  const isProduction = process.env.NODE_ENV === "production";
  const defaultPage = params.page ? params.page : 0;
  const pages =
    isProduction && !showDev()
      ? [
        <div key="welcomePage">
          <Welcome />
        </div>,
        <div key="eventPage">
          <Events />
        </div>,
        <div key="artistsPage">
          <Artist />
        </div>
      ]
      : [
        <div key="welcomePage">
          <Welcome />
        </div>,
        <div key="eventPage">
          <Events />
        </div>,
        <div key="artistsPage">
          <Artist />
        </div>,
        <div key="merchPage">
          <Merch />
        </div>,
        <div key="ticketPage">
          <CharityRave showEmail={true} />
        </div>,
      ];

  return (
    <>
      {defaultPage.length > 1 ? (
        <FourOfour />
      ) : (
        <CubeSlider pages={pages} defaultPageIndex={defaultPage} />
      )}
    </>
  );
};
