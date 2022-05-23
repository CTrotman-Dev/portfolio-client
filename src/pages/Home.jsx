import React from "react";

import HeroImage from "../components/HeroImage";
import QuickLinks from "../components/QuickLinks";
import AnimateInOut from "../components/Animation/AnimateInOut";

const Home = () => {
    return (
        <div>
            <HeroImage imgSrc="/logo2.png" />
            <AnimateInOut visible="true" delay="0" in="animate__shakeY" out="animate__bounceOutRight">
                <QuickLinks />
            </AnimateInOut>
        </div>
    );
}

export default Home;