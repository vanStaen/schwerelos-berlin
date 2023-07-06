import React from "react";

import { pageStore } from "../../store/pageStore";
import { artistStore } from "../../store/artistStore";

import "./LinkProfile.less";

export const LinkProfile = (props) => {

    const mouseOverHandler = () => {
        if (props.color === 'green') {
            document.documentElement.style.setProperty('--bgcolor', "#2bc487");
        } else if (props.color === 'purple') {
            document.documentElement.style.setProperty('--bgcolor', "#9F44D9");
        } else if (props.color === 'pink') {
            document.documentElement.style.setProperty('--bgcolor', "#F70069");
        } else {
            console.log('Error', 'Missing color props')
        }
    };

    const artistClickHandler = () => {
        pageStore.setSelectedArtistId(props.id);
    };

    return (
        <div className="artistLink" onMouseOver={mouseOverHandler} onClick={artistClickHandler}>
            <a href="#" data-replace={artistStore.artistNames[props.id]}><span>{artistStore.artistNames[props.id]}</span></a>
        </div >

    )

}