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
    <div
      style={{ backgroundColor: "Pink", height: "100vh" }}
      key="placeholder3"
    >
      placeholder 3
    </div>,
  ];

  return (
    <>
      <CubeSlider pages={pages} defaultPage={0} />
    </>
  );
};
