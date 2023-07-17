import React from "react";

import { CubeSlider } from "../components/CubeSlider/CubeSlider";
import { Welcome } from "./Welcome/Welcome";
import { Artist } from "./Artist/Artist";
import { Events } from "./Events/Events";

export const Main = () => {
  const pages = [
    <div key="welcomePage">
      <Welcome />
    </div>,
    <div key="artistsPage">
      <Artist />
    </div>,
    <div key="eventPage">
      <Events />
    </div>,
    <div key="merchPage">Merch</div>,
  ];

  return (
    <>
      <CubeSlider pages={pages} defaultPageIndex={2} />
    </>
  );
};
