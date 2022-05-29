import React from "react";
import { Link } from "react-router-dom";
import MyMap from "../components/MyMap";
import TitleBanner from "../components/TitleBanner";

const About = () => {
    return (
        <div className="row">
        <TitleBanner text="About" />
            <div className="about-content col-md-6">
                <h1>
                    About us
                </h1>
                <p>I am a software developer for Cardiff. I have travelled the world building beautiful code in beautiful places.</p>
                <h3>
                <Link to={"/clients"}>
                    See our past projects.
                </Link>
                    
                </h3>

            </div>
            <div className="col-md-6">
                <MyMap />
            </div>
        </div>
    );
}

export default About;