import React from "react";

const Logo = () => {
    const start = "<Craig ";
    const end = " Trotman/>";
    return (
        <div className="logo">
            <div className="logo-start">
                {start}
            </div>
            <div className="logo-end">
                {end}
            </div>
        </div>
    );
}

export default Logo;