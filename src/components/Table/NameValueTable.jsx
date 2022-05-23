import React, { useState, useEffect } from "react";


import NameValueCell from "./NameValueCell";
import AnimateInOut from "../Animation/AnimateInOut";

const NameValueTable = (props) => {

    return (
        <div>
            {props.data.map((x, i) =>
                <AnimateInOut visible="true" delay="0" in="animate__backInLeft" out="animate__backOutRight">
                    <NameValueCell key={i}
                        company={x.company}
                        role={x.role}
                        length={x.length}
                        languages={x.languages}
                        info={x.info}
                    />
                </AnimateInOut>
            )}
        </div>
    );
}

export default NameValueTable;