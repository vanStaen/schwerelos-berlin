import React, { useEffect, useState, useRef } from "react";
import fx from "glfx";

import { randomInteger } from '../../helpers/randomInteger'

import logoSchwerelos from "../../img/schwerelosLogo.png";

import "./Logo.less";

export const Logo = () => {
  const [sourceImg, setSourceImg] = useState(null);
  const radius = useRef(null);
  const canvasRotationRadius = useRef(2); //useRef(randomInteger(-30, 30) / 10);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!sourceImg) {
      const image = new Image();
      image.crossOrigin = "Anonymous";
      image.onload = () => {
        setSourceImg(image);
      };
      image.src = logoSchwerelos;
    } else {
      const logo = document.getElementById("Logo");
      //const top = logo.getBoundingClientRect().top + window.scrollY;
      //const left = logo.getBoundingClientRect().left + window.scrollX;
      const width = logo.clientWidth;
      const height = logo.clientHeight;
      radius.current = width > height ? width : height;
      //logoPosMiddleWidth.current = left + width / 2;
      //logoPosMiddleHeight.curren = top + height / 2;
      const canvas = fx.canvas();
      const texture = canvas.texture(sourceImg);
      canvas
        .draw(texture)
        .update();
      const displayCanvas = canvasRef.current;
      displayCanvas.width = sourceImg.width;
      displayCanvas.height = sourceImg.height;
      const ctx = displayCanvas.getContext("2d");
      ctx.drawImage(canvas, 0, 0);
    }
  }, [sourceImg]);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", onMouseMoveHandler);
    };
  }, []);

  const onMouseMoveHandler = (event) => {
    udpateImage(event.screenX, event.screenY);
  }

  const udpateImage = (screenX, screenY) => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = logoSchwerelos;
    const canvas = fx.canvas();
    const texture = canvas.texture(image);
    canvas
      .draw(texture)
      .swirl(
        screenX,
        screenY,
        radius.current + 150,
        canvasRotationRadius.current,
      )
      .update();

    const displayCanvas = canvasRef.current;
    displayCanvas.width = image.width;
    displayCanvas.height = image.height;
    const ctx = displayCanvas.getContext("2d");
    ctx.drawImage(canvas, 0, 0);
  };

  return (
    <div>
      <canvas
        id="Logo"
        ref={canvasRef}
        className="Logo"
        alt="Logo Schwerelos Berlin"
      />
    </div>
  );
};
