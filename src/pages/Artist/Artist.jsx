import React from "react";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore";
import { artistStore } from "../../store/artistStore";

import vs1 from "../../img/artists/vs1.jpg";

import "./Artist.less";

export const Artist = observer((props) => {
  const closeHandler = () => {
    pageStore.setSelectedArtistId(null);
  };

  const artistName = artistStore.artistNames[props.id];
  const artistBio = artistStore.artistBios[props.id];
  const artistPic = artistStore.artistPics[props.id];
  const artistLink = artistStore.artistLinks[props.id];

  return (
    <div className="artistContainer">
      <div className="artists">
        <div className="artist">
          <img src={vs1} className="artistPicture" />
        </div>
        <div className="artist">
          <img src={vs1} className="artistPicture" />
        </div>
        <div className="artist">
          <img src={vs1} className="artistPicture" />
        </div>
        <div className="artist">
          <img src={vs1} className="artistPicture" />
        </div>
        <div className="artist">
          <img src={vs1} className="artistPicture" />
        </div>
        <div className="artist">
          <img src={vs1} className="artistPicture" />
        </div>
      </div>
    </div>
  );
});
