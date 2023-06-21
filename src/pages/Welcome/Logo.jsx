import React, { useEffect, useState, useRef } from "react";
import fx from "glfx";

import { randomInteger } from '../../helpers/randomInteger'

import logoSchwerelos from "../../img/schwerelosLogo.png";

import "./Logo.less";

export const Logo = () => {
  const [sourceImg, setSourceImg] = useState(null);
  const [radius, setRadius] = useState(null);
  const [logoPosMiddleWidth, setLogoPosMiddleWidth] = useState(null);
  const [logoPosMiddleHeight, setLogoPosMiddleHeight] = useState(null);
  const [canvasRotationRadius, setCanvasRotationRadius] = useState(randomInteger(-30, 30) / 10);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!sourceImg) {
      const image = new Image();
      image.crossOrigin = "Anonymous";
      image.onload = () => {
        setSourceImg(image);
        console.log('image', image);
      };
      image.src = logoSchwerelos;
    } else {
      const logo = document.getElementById("Logo");
      const top = logo.getBoundingClientRect().top + window.scrollY;
      const left = logo.getBoundingClientRect().left + window.scrollX;
      const width = logo.clientWidth;
      const height = logo.clientHeight;
      setRadius(width > height ? width : height);
      setLogoPosMiddleWidth(left + width / 2);
      setLogoPosMiddleHeight(top + height / 2);
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
    console.log('event', event);
    console.log('sourceImg', sourceImg);
    //udpateImage(sourceImg);
  }

  const udpateImage = (sourceImgRef) => {
    const canvas = fx.canvas();
    const texture = canvas.texture(sourceImgRef);
    canvas
      .draw(texture)
      .swirl(
        logoPosMiddleWidth,
        logoPosMiddleHeight,
        radius + 100,
        canvasRotationRadius,
      )
      .update();

    const displayCanvas = canvasRef.current;
    displayCanvas.width = sourceImgRef.width;
    displayCanvas.height = sourceImgRef.height;
    const ctx = displayCanvas.getContext("2d");
    ctx.drawImage(canvas, 0, 0);
  }

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
