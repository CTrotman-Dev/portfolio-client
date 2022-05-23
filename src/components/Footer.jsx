import React from "react";

import SocialIcons from "./SocialIcons";

import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();

    function Copyright() {
        return (
            <div>
                {'Copyright © Craig Trotman '}
                {new Date().getFullYear()}.
            </div>
        );
    }

    return (
        <div className="footer sticky-bottom">
            <SocialIcons />
            <Copyright />
        </div>
    );
};

export default Footer;
