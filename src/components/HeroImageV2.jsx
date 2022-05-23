import React from "react";

import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax";

const HeroImageV2 = (props) => {
    const background = {
        image: props.imgSrc,
        speed:-100,
        translateY: [0, 70],
        opacity: [1, 0.5, "easeInQuad"],
        scale: [1, 1, "easeInQuad"],
        shouldAlwaysCompleteAnimation: true
      };
    
      const gradientOverlay = {
        opacity: [0, 1, "easeInCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
      };
    



    return (
        <ParallaxBanner
        layers={[background]}
        className="full"
      />
        // <div className="parallax-root">
        //     <ParallaxBanner
        //         layers={[
        //             { image: props.imgSrc, speed: -20 },
        //             {
        //                 speed: -15,
        //                 children: (
        //                     <div className="absolute inset-0 flex items-center justify-center">
        //                         <h1 className="text-8xl text-white font-thin">Hello World!</h1>
        //                     </div>
        //                 ),
        //             },
        //             { image: props.imgSrc, speed: -10 },
        //         ]}
        //         className="aspect-[2/1]"
        //     >
        //         <div className="absolute inset-0 flex items-center justify-center">
        //             <h1 className="text-8xl text-white font-thin">Hello World!</h1>
        //         </div>
        //     </ParallaxBanner>
        // </div>

        // <div ref={ref} className="hero-container-full">
        //     <img src={props.imgSrc} />

        // </div>
    );
}

export default HeroImageV2;