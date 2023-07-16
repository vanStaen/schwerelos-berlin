import React from "react";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore";
import { artistStore } from "../../store/artistStore";

import vs2 from "../../img/artists/vs2.jpg";

import "./Artist.less";

export const Artist = observer(() => {
  const artistPics = artistStore.artists.map((artist, index) => {
    console.log(artist.name);
    return (
      <div className="artist">
        {artist.name}
        <img src={vs2} alt={artist.name} />
      </div>
    );
  });

  return <div className="artistContainer">{artistPics}</div>;
});
