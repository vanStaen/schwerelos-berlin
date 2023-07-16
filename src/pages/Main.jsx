import React from "react";

import { CubeSlider } from "../components/CubeSlider/CubeSlider";
import { Welcome } from "./Welcome/Welcome";
import { Artist } from "./Artist/Artist";

export const Main = () => {
  const pages = [
    <div key="welcomePage">
      <Welcome />
    </div>,
    <div key="artistsPage">
      <Artist />
    </div>,
  ];

  return (
    <>
      <CubeSlider pages={pages} defaultPageIndex={1} />
    </>
  );
};
