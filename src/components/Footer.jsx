import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();

    function Copyright() {
        return (
            <div className="footer">
                {'Copyright © Craig Trotman '}
                {new Date().getFullYear()}.
            </div>
        );
    }

    return (
        <div>
            <Copyright />
        </div>
    );
};

export default Footer;
