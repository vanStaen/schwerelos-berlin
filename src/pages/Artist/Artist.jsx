import React from "react";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore";
import { artistStore } from "../../store/artistStore";

import vs2 from "../../img/artists/vs2.jpg";

import "./Artist.less";

export const Artist = observer(() => {
  const artistPics = artistStore.artists.map((artist) => {
    return (
      <div className="artist">
        {artist.name}
        <img src={vs2} alt={artist.name} />
      </div>
    );
  });

  return (
    <div className="artistPageContainer">
      <div className="artistTitle">
        <span className="weAre">We are</span>
        <div className="schwerelos" style={{ "--stacks": 3 }}>
          <span style={{ "--index": 0 }}>SCHWERELOS</span>
          <span style={{ "--index": 1 }}>SCHWERELOS</span>
          <span style={{ "--index": 2 }}>SCHWERELOS</span>
        </div>
      </div>
      <div className="artistContainer">{artistPics}</div>
    </div>
  );
});
