import React, { useEffect, useRef } from "react";

import { cubeSliderStore } from "../cubeSliderStore";

import "./Buttons.less";

export const Buttons = (props) => {
  const throttling = useRef(false);

  const keyDownHandler = (event) => {
    //event.preventDefault();
    const keyPressed = event.key.toLowerCase();
    if (throttling.current === false) {
      throttling.current = true;
      if (keyPressed === "arrowright") {
        const element = document.getElementById("arrowRight");
        element.classList.add("active");
        setTimeout(() => {
          cubeSliderStore.showRight();
          element.classList.remove("active");
        }, 500);
      } else if (keyPressed === "arrowleft") {
        const element = document.getElementById("arrowLeft");
        element.classList.add("active");
        setTimeout(() => {
          cubeSliderStore.showLeft();
          element.classList.remove("active");
        }, 500);
      }
      setTimeout(() => {
        throttling.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  useEffect(() => {
    if (props.color) {
      document
        .querySelector(":root")
        .style.setProperty("--organic-arrow-color", props.color);
    }
  }, []);

  const handleControlClick = (elementId) => {
    if (throttling.current === false) {
      throttling.current = true;
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
      setTimeout(() => {
        throttling.current = false;
      }, 1000);
    }
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
