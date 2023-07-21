import React from "react";

import { CubeSlider } from "../components/CubeSlider/CubeSlider";
import { Welcome } from "./Welcome/Welcome";
import { Artist } from "./Artist/Artist";
import { Events } from "./Events/Events";
import { Merch } from "./Merch/Merch";
import { Tickets } from "./Tickets/Tickets";
import { showDev } from "../helpers/showDev";

export const Main = () => {
  const isProduction = process.env.NODE_ENV === "production";

  const pages =
    isProduction && !showDev()
      ? [
        <div key="welcomePage">
          <Welcome />
        </div>,
        <div key="eventPage">
          <Events />
        </div>,
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
          <Tickets />
        </div>,
      ];

  return (
    <>
      <CubeSlider pages={pages} defaultPageIndex={2} />
    </>
  );
};
