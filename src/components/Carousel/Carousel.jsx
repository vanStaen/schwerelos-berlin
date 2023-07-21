import React, { useEffect, useState } from 'react';

import './Carousel.less';

/* 
ressources: 
https://codepen.io/desandro/pen/wjeBpp
https://3dtransforms.desandro.com/carousel
*/

export const Carousel = () => {
    const [selectedFace, setSelectedFace] = useState(1);
    const [radius, setRadius] = useState(null);
    const numberOfFace = 8;
    const theta = 360 / numberOfFace;

    useEffect(() => {
        const carousel = document.querySelector('.carousel');
        const cellSize = carousel.offsetHeight;
        setRadius(Math.round((cellSize / 2) / Math.tan(Math.PI / numberOfFace)));
    }, [])

    const rotateCarousel = () => {
        const carousel = document.querySelector('.carousel');
        const angle = theta * selectedFace * -1;
        carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
            'rotateX' + '(' + angle + 'deg)';
    }

    const handleNextFaceClick = () => {
        setSelectedFace(selectedFace + 1)
        rotateCarousel();
    }

    return (
        <>
            <div className="nextTemp" onClick={handleNextFaceClick}>next</div>
            <div className="scene">
                <div className="carousel">
                    <div className="carousel__cell">1</div>
                    <div className="carousel__cell">2</div>
                    <div className="carousel__cell">3</div>
                    <div className="carousel__cell">4</div>
                    <div className="carousel__cell">5</div>
                    <div className="carousel__cell">6</div>
                    <div className="carousel__cell">7</div>
                    <div className="carousel__cell">8</div>
                </div>
            </div>
        </>
    );
}