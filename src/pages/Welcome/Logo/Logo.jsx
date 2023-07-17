import React, { useEffect, useState, useRef } from "react";
import fx from "glfx";

import logoSchwerelos from "../../../img/schwerelosLogo.png";

import "./Logo.less";

const MAX_CANVAS_ROTATION_RADIUS = 3;

export const Logo = () => {
  const [showMovingLogo, setShowMovingLogo] = useState(false);
  const [sourceImg, setSourceImg] = useState(null);
  const radius = useRef(null);
  const screenX = useRef(1);
  const screenY = useRef(1);
  const canvasRotationRadius = useRef(2);
  const lastCanvasRotationRadius = useRef(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (showMovingLogo) {
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
        canvas.draw(texture).update();
        const displayCanvas = canvasRef.current;
        displayCanvas.width = sourceImg.width;
        displayCanvas.height = sourceImg.height;
        const ctx = displayCanvas.getContext("2d");
        ctx.drawImage(canvas, 0, 0);
      }
    }
  }, [sourceImg, showMovingLogo]);

  useEffect(() => {
    if (showMovingLogo) {
      document.addEventListener("mousemove", onMouseMoveHandler);
      return () => {
        document.removeEventListener("mousemove", onMouseMoveHandler);
      };
    }
  }, [showMovingLogo]);

  const onMouseMoveHandler = (event) => {
    screenX.current = event.screenX;
    screenY.current = event.screenY;
    udpateImage();
  };

  useEffect(() => {
    /*setInterval(() => {
      if (canvasRotationRadius.current >= MAX_CANVAS_ROTATION_RADIUS) {
        lastCanvasRotationRadius.current = canvasRotationRadius.current;
        canvasRotationRadius.current = lastCanvasRotationRadius.current - 0.1;
      }
      else if (canvasRotationRadius.current <= -MAX_CANVAS_ROTATION_RADIUS) {
        lastCanvasRotationRadius.current = canvasRotationRadius.current;
        canvasRotationRadius.current = lastCanvasRotationRadius.current + 0.1;
      }
      else if (lastCanvasRotationRadius.current < canvasRotationRadius.current) {
        lastCanvasRotationRadius.current = canvasRotationRadius.current;
        canvasRotationRadius.current = lastCanvasRotationRadius.current + 0.1;
      }
      else if (lastCanvasRotationRadius.current > canvasRotationRadius.current) {
        lastCanvasRotationRadius.current = canvasRotationRadius.current;
        canvasRotationRadius.current = lastCanvasRotationRadius.current - 0.1;
      }
    }, 10);*/
  }, []);

  const udpateImage = () => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = logoSchwerelos;
    const canvas = fx.canvas();
    const texture = canvas.texture(image);
    canvas
      .draw(texture)
      .swirl(
        screenX.current,
        screenY.current,
        radius.current + 150,
        canvasRotationRadius.current
      )
      .update();

    const displayCanvas = canvasRef.current;
    displayCanvas.width = image.width;
    displayCanvas.height = image.height;
    const ctx = displayCanvas.getContext("2d");
    ctx.drawImage(canvas, 0, 0);
  };

  return (
    <div className="logoContainer">
      {showMovingLogo ?
        <canvas
          id="Logo"
          ref={canvasRef}
          className="Logo"
          alt="Logo Schwerelos Berlin"
        /> :
        <img
          className="Logo"
          src={logoSchwerelos}
          alt="Schwerelos Berlin"
          style={{ cursor: "pointer" }}
          onClick={() => { setShowMovingLogo(true) }}
        />
      }
    </div>
  );
};
