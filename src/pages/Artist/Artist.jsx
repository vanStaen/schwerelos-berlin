import React from "react";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore";
import { artistStore } from "../../store/artistStore";

import meema from "../../img/artists/meema.jpg";
import vanstaen from "../../img/artists/vanstaen.jpg";
import { GlitchText } from "../../components/GlitchText/GlitchText";

import "./Artist.less";

export const Artist = observer(() => {
  const artistPics = artistStore.artists.map((artist) => {
    return (
      <div className="artist">
        {artist.name}
        <img src={meema} alt={artist.name} />
      </div>
    );
  });

  return (
    <div className="artistPageContainer">
      <GlitchText glitchText="Schwerelos" overText="we are" />
      <div className="artistContainer">{/*artistPics*/}</div>
    </div>
  );
});
