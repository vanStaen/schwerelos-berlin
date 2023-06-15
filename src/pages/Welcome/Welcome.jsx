import React from "react";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore";
import { Artist } from "../Artist/Artist";

import "./Welcome.less";

export const Welcome = observer(() => {

  const artistClickHandler = (id) => {
    pageStore.setSelectedArtistId(id);
  }

  return (
    pageStore.selectedArtistId ?
      <Artist id={pageStore.selectedArtistId} />
      :
      <div className="welcome">
        <div className="container">
          <div id="ArtistLinks" className="artistLinks">
            <div onClick={() => artistClickHandler(1)}>b0ys_cry</div>
            <div onClick={() => artistClickHandler(2)}>Johannes Hillmer</div>
            <div onClick={() => artistClickHandler(3)}>MEEMA</div>
            <div onClick={() => artistClickHandler(4)}>Nostique</div>
            <div onClick={() => artistClickHandler(5)}>Sommersonnenwende</div>
            <div onClick={() => artistClickHandler(6)}>van Staen</div>
          </div>
        </div>
      </div>
  );
});
