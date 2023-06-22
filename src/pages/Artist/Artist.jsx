import React from "react";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore";
import { artistStore } from "../../store/artistStore";

export const Artist = observer((props) => {

  const closeHandler = () => {
    pageStore.setSelectedArtistId(null);
  }

  const artistName = artistStore.artistNames[props.id];
  const artistBio = artistStore.artistBios[props.id];
  const artistPic = artistStore.artistPics[props.id];
  const artistLink = artistStore.artistLinks[props.id];

  return (
    <div>
      <div>
        {artistName}
      </div>
      <div onClick={closeHandler}>
        close
      </div>
    </div>
  );
});
