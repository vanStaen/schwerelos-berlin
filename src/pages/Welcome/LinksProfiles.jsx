import React from "react";

import { pageStore } from "../../store/pageStore";

import "./LinksProfiles.less";

export const LinksProfiles = () => {

    const artistClickHandler = (id) => {
        pageStore.setSelectedArtistId(id);
    };

    return (
        <div className="artistLinks">
            <div className="artistLink" onClick={() => artistClickHandler(1)}>
                b0ys_cry
            </div>
            <div className="artistLink" onClick={() => artistClickHandler(2)}>
                Johannes Hillmer
            </div>
            <div className="artistLink" onClick={() => artistClickHandler(3)}>
                MEEMA
            </div>
            <div className="artistLink" onClick={() => artistClickHandler(4)}>
                Nostique
            </div>
            <div className="artistLink" onClick={() => artistClickHandler(5)}>
                Sommersonnenwende
            </div>
            <div className="artistLink" onClick={() => artistClickHandler(6)}>
                van Staen
            </div>
        </div>
    )

}