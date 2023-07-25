import React, { useEffect, useState, useRef } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

import { pageStore } from "../../store/pageStore";

import "./Carousel.less";

/* 
ressources: 
https://codepen.io/desandro/pen/wjeBpp
https://3dtransforms.desandro.com/carousel
*/

export const Carousel = (props) => {
  const [selectedFace, setSelectedFace] = useState(1);
  const [rotationFace, setRotationFace] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const radius = useRef(null);
  const throttling = useRef(false);
  const numberOfFace = 8;
  const theta = 360 / numberOfFace;
  const minSwipeDistance = 50;
  const { faces } = props;

  const defineTranslateZCarousel = () => {
    var scene = document.querySelector(".scene");
    const sceneHeight = scene.offsetHeight + 35;
    const tan = Math.tan(((360 / (numberOfFace * 2)) * Math.PI) / 180);
    const translateZ = sceneHeight / 2 / tan;
    scene.style.setProperty("--translateZ", `${translateZ}px`);
  };

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const carouselCell = document.getElementsByClassName("carousel__cell");
    const cellSize = carousel.offsetHeight;
    radius.current = Math.round(
      cellSize / 2 / Math.tan(Math.PI / numberOfFace)
    );
    setTimeout(() => {
      carousel.style.transition = "transform 1s";
      for (let element of carouselCell) {
        element.style.transition = "transform 1s, opacity .5s";
      }
    }, 250);
    defineTranslateZCarousel();
    XPathEvaluator;
  }, []);

  useEffect(() => {
    window.addEventListener("resize", defineTranslateZCarousel);
    return () => {
      window.removeEventListener("resize", defineTranslateZCarousel);
    };
  }, [defineTranslateZCarousel]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;
    if (throttling.current === false) {
      throttling.current = true;
      if (isUpSwipe) {
        handleFaceChange(false);
      } else if (isDownSwipe) {
        handleFaceChange(true);
      }
      pageStore.showSwipeArtist && pageStore.setShowSwipeArtist(false);
      setTimeout(() => {
        throttling.current = false;
      }, 250);
    }
  };

  const getFaceNumber = (faceSelected, moveFromSelected) => {
    if (faceSelected + moveFromSelected < 1) {
      return numberOfFace + (faceSelected + moveFromSelected);
    } else if (faceSelected + moveFromSelected > 8) {
      return faceSelected + moveFromSelected - numberOfFace;
    } else {
      return faceSelected + moveFromSelected;
    }
  };

  const rotateCarousel = (toNewFace, toNewRotation) => {
    const facePrev3 = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(toNewFace, -3)})`
    );
    const facePrev2 = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(toNewFace, -2)})`
    );
    const facePrev = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(toNewFace, -1)})`
    );
    const faceSelected = document.querySelector(
      `.carousel__cell:nth-child(${toNewFace})`
    );
    const faceNext = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(toNewFace, 1)})`
    );
    const faceNext2 = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(toNewFace, 2)})`
    );
    const faceNext3 = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(toNewFace, 3)})`
    );
    const faceNext4 = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(toNewFace, 4)})`
    );

    facePrev3.style.opacity = 1;
    facePrev2.style.opacity = 1;
    facePrev.style.opacity = 1;
    faceSelected.style.opacity = 1;
    faceNext.style.opacity = 1;
    faceNext2.style.opacity = 1;
    faceNext3.style.opacity = 1;
    faceNext4.style.opacity = 1;

    const carousel = document.querySelector(".carousel");
    const angle = theta * toNewRotation * -1;
    carousel.style.transform =
      "translateZ(" +
      -radius.current +
      "px) " +
      "rotateX" +
      "(" +
      angle +
      "deg)";

    setTimeout(() => {
      facePrev3.style.opacity = 0;
      facePrev2.style.opacity = 0;
      facePrev.style.opacity = 0.5;
      faceSelected.style.opacity = 1;
      faceNext.style.opacity = 0.5;
      faceNext2.style.opacity = 0;
      faceNext3.style.opacity = 0;
      faceNext4.style.opacity = 0;
    }, 500);
  };

  useEffect(() => {
    const facePrevPrev = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(selectedFace, -2)})`
    );
    const facePrev = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(selectedFace, -1)})`
    );
    const faceNext = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(selectedFace, 1)})`
    );
    const faceNextNext = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(selectedFace, 2)})`
    );
    facePrevPrev.onclick = null;
    facePrev.onclick = () => {
      handleFaceChange(false);
    };
    faceNext.onclick = () => {
      handleFaceChange(true);
    };
    faceNextNext.onclick = null;
  }, [selectedFace, rotationFace]);

  const handleFaceChange = (next) => {
    if (next) {
      const nextFace = getFaceNumber(selectedFace, 1);
      const nextRotation = rotationFace + 1;
      setSelectedFace(nextFace);
      setRotationFace(nextRotation);
      rotateCarousel(nextFace, nextRotation);
      pageStore.setSelectedArtistId(nextFace - 1); //because array index
    } else {
      const prevFace = getFaceNumber(selectedFace, -1);
      const prevRotation = rotationFace - 1;
      setSelectedFace(prevFace);
      setRotationFace(prevRotation);
      rotateCarousel(prevFace, prevRotation);
      pageStore.setSelectedArtistId(prevFace - 1); //because array index
    }
  };

  const keyDownHandler = (event) => {
    //event.preventDefault();
    const keyPressed = event.key.toLowerCase();
    if (throttling.current === false) {
      throttling.current = true;
      if (keyPressed === "arrowup") {
        handleFaceChange(true);
      } else if (keyPressed === "arrowdown") {
        handleFaceChange(false);
      }
      setTimeout(() => {
        throttling.current = false;
      }, 250);
    }
  };

  const wheelHandler = (event) => {
    if (throttling.current === false) {
      throttling.current = true;
      if (event.deltaY > 0) {
        handleFaceChange(false);
      } else if (event.deltaY < 0) {
        handleFaceChange(true);
      }
      setTimeout(() => {
        throttling.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("wheel", wheelHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("wheel", wheelHandler);
    };
  }, [keyDownHandler]);

  const handleMouseOver = (id) => {
    const faceId = parseInt(id.slice(-1), 10);
    const nextFace = getFaceNumber(selectedFace, +1);
    const prevFace = getFaceNumber(selectedFace, -1);
    if (faceId === nextFace || faceId === prevFace) {
      const element = document.getElementById(id);
      element.style.opacity = ".8";
    }
  };

  const handleMouseOut = (id) => {
    const faceId = parseInt(id.slice(-1), 10);
    const nextFace = getFaceNumber(selectedFace, +1);
    const prevFace = getFaceNumber(selectedFace, -1);
    if (faceId === nextFace || faceId === prevFace) {
      const element = document.getElementById(id);
      element.style.opacity = ".5";
    }
  };

  const randomSpinClick = () => {
    const randomNum =
      (Math.floor(Math.random() * (numberOfFace - 1)) + 1) *
      (Math.round(Math.random()) ? 1 : -1);
    const randomFace = getFaceNumber(selectedFace, randomNum);
    const randomRotation = rotationFace + randomNum;
    setSelectedFace(randomFace);
    setRotationFace(randomRotation);
    rotateCarousel(randomFace, randomRotation);
    pageStore.setSelectedArtistId(randomFace - 1); //because array index
  };

  return (
    <>
      <Tooltip title="Random spin | take a chance" placement="left">
        <div className="randomSpin" onClick={randomSpinClick}>
          <SyncOutlined className="randomSpinIcon" />
          <div className="randomSpinQuestionMark">?</div>
        </div>
      </Tooltip>
      <div
        className="carouselContainer"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="scene"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="carousel">
            <div
              id="face1"
              className="carousel__cell"
              onMouseOver={() => handleMouseOver("face1")}
              onMouseOut={() => handleMouseOut("face1")}
            >
              {faces[0]}
            </div>
            <div
              id="face2"
              className="carousel__cell"
              onMouseOver={() => handleMouseOver("face2")}
              onMouseOut={() => handleMouseOut("face2")}
            >
              {faces[1]}
            </div>
            <div
              id="face3"
              className="carousel__cell"
              onMouseOver={() => handleMouseOver("face3")}
              onMouseOut={() => handleMouseOut("face3")}
            >
              {faces[2]}
            </div>
            <div
              id="face4"
              className="carousel__cell"
              onMouseOver={() => handleMouseOver("face4")}
              onMouseOut={() => handleMouseOut("face4")}
            >
              {faces[3]}
            </div>
            <div
              id="face5"
              className="carousel__cell"
              onMouseOver={() => handleMouseOver("face5")}
              onMouseOut={() => handleMouseOut("face5")}
            >
              {faces[4]}
            </div>
            <div
              id="face6"
              className="carousel__cell"
              onMouseOver={() => handleMouseOver("face6")}
              onMouseOut={() => handleMouseOut("face6")}
            >
              {faces[5]}
            </div>
            <div
              id="face7"
              className="carousel__cell"
              onMouseOver={() => handleMouseOver("face7")}
              onMouseOut={() => handleMouseOut("face7")}
            >
              {faces[6]}
            </div>
            <div
              id="face8"
              className="carousel__cell"
              onMouseOver={() => handleMouseOver("face8")}
              onMouseOut={() => handleMouseOut("face8")}
            >
              {faces[7]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
