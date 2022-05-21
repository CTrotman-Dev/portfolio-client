import React from "react";

import NameValueTable from "../components/NameValueTable";
import MyMap from "../components/MyMap";

const About = () => {
    return (
        <div className="row">
            <div className="about-content col-md-6">
                <h1>
                    About us
                </h1>
               
                <h3>
                    <a href="/showcase">See our past projects.</a>
                </h3>

            </div>
            <div className="col-md-6">
                <MyMap />
            </div>
        </div>
    );
}

export default About;