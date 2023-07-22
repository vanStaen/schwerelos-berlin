import React, { useEffect, useState } from "react";

import "./Carousel.less";

/* 
ressources: 
https://codepen.io/desandro/pen/wjeBpp
https://3dtransforms.desandro.com/carousel
*/

export const Carousel = () => {
  const [selectedFace, setSelectedFace] = useState(1);
  const [radius, setRadius] = useState(null);
  const numberOfFace = 8;
  const theta = 360 / numberOfFace;

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const cellSize = carousel.offsetHeight;
    setRadius(Math.round(cellSize / 2 / Math.tan(Math.PI / numberOfFace)));
  }, []);

  const getFaceNumber = (faceSelected, moveFromSelected) => {
    console.log(faceSelected, moveFromSelected);
    if (faceSelected + moveFromSelected < 1) {
      return numberOfFace + (faceSelected + moveFromSelected);
    } else if (faceSelected + moveFromSelected > 8) {
      return faceSelected + moveFromSelected - numberOfFace;
    } else {
      return faceSelected + moveFromSelected;
    }
  };

  const rotateCarousel = (toNewFace) => {
    console.log("toNewFace", toNewFace);
    const carousel = document.querySelector(".carousel");
    const angle = theta * (toNewFace - 1) * -1;
    carousel.style.transform =
      "translateZ(" + -radius + "px) " + "rotateX" + "(" + angle + "deg)";

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

  const handleFaceChangeClick = (next) => {
    if (next) {
      const nextFace = getFaceNumber(selectedFace, 1);
      setSelectedFace(nextFace);
      rotateCarousel(nextFace);
    } else {
      const prevFace = getFaceNumber(selectedFace, -1);
      setSelectedFace(prevFace);
      rotateCarousel(prevFace);
    }
  };

  return (
    <>
      <div className="nextTemp" onClick={() => handleFaceChangeClick(true)}>
        next
      </div>
      <div className="prevTemp" onClick={() => handleFaceChangeClick(false)}>
        prev
      </div>
      <div className="scene">
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
    </>
  );
};
