import React, { useEffect, useState, useRef } from "react";
import { observer } from "mobx-react";

import { Buttons } from "./Buttons/Buttons";
import { cubeSliderStore } from "./cubeSliderStore";

import "./CubeSlider.less";

export const CubeSlider = observer((props) => {
  const { pages, defaultPageIndex } = props;
  const throttling = useRef(false);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (throttling.current === false) {
      throttling.current = true;
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;
      if (isRightSwipe) {
        cubeSliderStore.showLeft();
      } else if (isLeftSwipe) {
        cubeSliderStore.showRight();
      }
      setTimeout(() => {
        throttling.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    cubeSliderStore.setPagesLength(pages.length);
    cubeSliderStore.setPageShown(defaultPageIndex ? defaultPageIndex : 0);
  }, [pages]);

  return (
    <>
      <Buttons color="#fff" numPages={pages.length} />
      <div
        className="cubeContainer"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="cube">
          <div className="cube__face cube__face--left">
            <div className="cube__full--screen">
              {pages[cubeSliderStore.pagePrev]}
            </div>
          </div>
          <div className="cube__face cube__face--front">
            <div className="cube__full--screen">
              {pages[cubeSliderStore.pageShown]}
            </div>
          </div>
          <div className="cube__face cube__face--right">
            <div className="cube__full--screen">
              {pages[cubeSliderStore.pageNext]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
