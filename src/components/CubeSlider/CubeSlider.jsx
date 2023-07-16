import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { Buttons } from "./Buttons/Buttons";
import { cubeSliderStore } from "./cubeSliderStore";

import "./CubeSlider.less";

export const CubeSlider = observer((props) => {
  const { pages, defaultPage } = props;

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
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isRightSwipe) {
      cubeSliderStore.showLeft();
    } else if (isLeftSwipe) {
      cubeSliderStore.showRight();
    }
  };

  useEffect(() => {
    cubeSliderStore.setPagesLength(pages.length);
    cubeSliderStore.setPageShown(defaultPage ? defaultPage : 0);
  }, [pages]);

  return (
    <>
      <Buttons color="#6a6a6a" numPages={pages.length} />
      <div
        className="cubeContainer"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="cube">
          <div className="cube__face cube__face--left">
            {pages[cubeSliderStore.pagePrev]}
          </div>
          <div className="cube__face cube__face--front">
            {pages[cubeSliderStore.pageShown]}
          </div>
          <div className="cube__face cube__face--right">
            {pages[cubeSliderStore.pageNext]}
          </div>
        </div>
      </div>
    </>
  );
});
