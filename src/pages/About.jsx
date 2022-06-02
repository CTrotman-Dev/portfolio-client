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
                    About Me
                </h1>
                <p> I'm Craig Trotman, A Software Engineer / developer from Cardiff, Wales.
                    I have been creating Software for over 10 years, travelling the world building code in beautiful places.
                    
                </p>
                <p>
                    Since Graduating back in 2014 from Swansea University, i have gained experience in various different developer roles. Starting with working for a big Goverment Contracting company in the UK.
                </p>
                <p>
                    From there i decided to get some life experience by travelling through Asia and on to Australia, where i completed a 3 month contract at a Software Development company in Perth.
                </p>
                <p>
                    Continuing to travel, still furthering my knowledge and programming toolset, i stayed in Bali for a few months whilst learning and developing Android mobile games.
                </p>
                <p>
                    After doing a bit more travelling around Australia and New Zealand, i returned home to being working at a labelling machinery manufacturers. At the same time i started developing websites for local clients.
                </p>
                <h3>
                    <Link className="btn btn-lg btn-about" to={"/contact"}>
                    Get in touch to Digitise your business today.
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