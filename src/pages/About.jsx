import React from "react";

import MyMap from "../components/MyMap";

const About = () => {
    return (
        <div className="row">
            <div className="about-content col-md-6">
                <h1>
                    About us
                </h1>
                <p>I am a software developer for Cardiff. I have travelled the world building beautiful code in beautiful places.</p>
                <h3>
                    <a href="/clients">See our past projects.</a>
                </h3>

            </div>
            <div className="col-md-6">
                <MyMap />
            </div>
        </div>
    );
}

export default About;