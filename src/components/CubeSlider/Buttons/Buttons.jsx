import React, { useEffect } from "react";

import { cubeSliderStore } from "../cubeSliderStore";

import "./Buttons.less";

export const Buttons = (props) => {
  useEffect(() => {
    if (props.color) {
      document
        .querySelector(":root")
        .style.setProperty("--organic-arrow-color", props.color);
    }
  }, []);

  const handleControlClick = (elementId) => {
    const element = document.getElementById(elementId);
    element.classList.add("active");
    setTimeout(() => {
      if (elementId === "arrowRight") {
        cubeSliderStore.showRight();
      } else if (elementId === "arrowLeft") {
        cubeSliderStore.showLeft();
      }
      element.classList.remove("active");
    }, 500);
  };

  return (
    <>
      <div className="controls">
        {cubeSliderStore.pagePrev !== null && (
          <div className="prev" onClick={() => handleControlClick("arrowLeft")}>
            <span id="arrowLeft" className="arrowLeft" />
          </div>
        )}
        {cubeSliderStore.pageNext !== null && (
          <div
            className="next"
            onClick={() => handleControlClick("arrowRight")}
          >
            <span id="arrowRight" className="arrowRight" />
          </div>
        )}
      </div>
    </>
  );
};
