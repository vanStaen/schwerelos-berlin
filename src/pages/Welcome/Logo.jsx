import React, { useEffect, useState, useRef } from "react";
import fx from "glfx";

import { randomInteger } from '../../helpers/randomInteger'

import logoSchwerelos from "../../img/schwerelosLogo.png";

import "./Logo.less";

const drawCanvas = (ctx, source) => {
  if (!source) return;

  ctx.drawImage(source, 0, 0);
};

export const Logo = () => {
  const [sourceImg, setSourceImg] = useState(null);
  const canvasRef = useRef(null);
  const canvasRotationRadius = useRef(randomInteger(-30, 30) / 10);

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
          radius + 100,
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
