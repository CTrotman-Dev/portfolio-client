import React from "react";

const HeroImage = (props) => {
    return (
        <div className="hero-container">
            <img src={props.imgSrc} />

        </div>
    );
}

export default HeroImage;