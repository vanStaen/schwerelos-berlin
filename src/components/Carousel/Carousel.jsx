import React, { useEffect, useState, useRef } from "react";

import "./Carousel.less";

/* 
ressources: 
https://codepen.io/desandro/pen/wjeBpp
https://3dtransforms.desandro.com/carousel
*/

export const Carousel = () => {
  const [selectedFace, setSelectedFace] = useState(1);
  const [rotationFace, setRotationFace] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const radius = useRef(null);
  const throttling = useRef(false);
  const numberOfFace = 8;
  const theta = 360 / numberOfFace;
  const minSwipeDistance = 50;

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const cellSize = carousel.offsetHeight;
    radius.current = Math.round(
      cellSize / 2 / Math.tan(Math.PI / numberOfFace)
    );
  }, []);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY);

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

    const facePrevPrev = document.querySelector(
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
    const faceNextNext = document.querySelector(
      `.carousel__cell:nth-child(${getFaceNumber(toNewFace, 2)})`
    );
    facePrevPrev.style.opacity = 0;
    facePrev.style.opacity = 1;
    faceSelected.style.opacity = 1;
    faceNext.style.opacity = 1;
    faceNextNext.style.opacity = 0;
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
    } else {
      const prevFace = getFaceNumber(selectedFace, -1);
      const prevRotation = rotationFace - 1;
      setSelectedFace(prevFace);
      setRotationFace(prevRotation);
      rotateCarousel(prevFace, prevRotation);
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

  return (
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
          <div className="carousel__cell">1</div>
          <div className="carousel__cell">2</div>
          <div className="carousel__cell">3</div>
          <div className="carousel__cell">4</div>
          <div className="carousel__cell">5</div>
          <div className="carousel__cell">6</div>
          <div className="carousel__cell">7</div>
          <div className="carousel__cell">8</div>
        </div>
      </div>
    </div>
  );
};
