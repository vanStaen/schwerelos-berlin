import React, { useEffect, useState, useRef } from "react";
import fx from "glfx";

import logoSchwerelos from "../../img/image00006.jpeg";

import "./Logo.less";

const drawCanvas = (ctx, source) => {
  if (!source) return;

  ctx.drawImage(source, 0, 0);
};

export const Logo = () => {
  const [sourceImg, setSourceImg] = useState(null);
  const canvasRef = React.useRef(null);
  const canvasRotationRadius = React.useRef(2);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const onMouseMove = (mouse) => {
    const windowWidth = window.innerWidth;
    const windowWidthMiddle = Math.ceil(window.innerWidth / 2);
    const mousePositionWidth = mouse.screenX;

    if (mousePositionWidth > windowWidthMiddle) {
      //rotation will be positive
      canvasRotationRadius.current = 3;
    } else {
      //rotation will be positive
      canvasRotationRadius.current = 10;
    }

    console.log("mousePositionWidth", mousePositionWidth);
    console.log("windowWidth", windowWidth);
    console.log("windowWidthMiddle", windowWidthMiddle);
    console.log("windowWidthMiddle", windowWidthMiddle);
  };

  useEffect(() => {
    if (!sourceImg) {
      const image = new Image();
      image.crossOrigin = "Anonymous";
      image.onload = () => {
        setSourceImg(image);
      };
      image.src = logoSchwerelos;
    } else {
      var canvas = fx.canvas();
      var texture = canvas.texture(sourceImg);

      const logo = document.getElementById("Logo");
      const top = logo.getBoundingClientRect().top + window.scrollY;
      const left = logo.getBoundingClientRect().left + window.scrollX;
      const width = logo.clientWidth;
      const height = logo.clientHeight;
      const radius = width > height ? width : height;
      const LogoPosMiddleWidth = left + width / 2;
      const LogoPosMiddleHeight = top + height / 2;

      // apply the ink filter
      canvas.draw(texture).ink(0.52).update();
      canvas
        .draw(texture)
        .swirl(
          LogoPosMiddleWidth,
          LogoPosMiddleHeight,
          radius,
          canvasRotationRadius.current
        )
        .update();

      const displayCanvas = canvasRef.current;
      displayCanvas.width = sourceImg.width;
      displayCanvas.height = sourceImg.height;
      const ctx = displayCanvas.getContext("2d");
      drawCanvas(ctx, canvas);
    }
  }, [sourceImg, canvasRotationRadius]);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

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
