import React, { useState, useEffect } from "react";


import NameValueCell from "./NameValueCell";

import AnimateScroll from "../Animation/AnimateScroll";
import AnimateInOut from "../Animation/AnimateInOut";

const NameValueTable = (props) => {

    return (
        <div>
            {props.data.map((x, i) => 
                <AnimateScroll key={i}>
                    <NameValueCell 
                        company={x.company}
                        role={x.role}
                        length={x.length}
                        languages={x.languages}
                        info={x.info}
                    />
                </AnimateScroll>
            )}
        </div>
    );
}

export default NameValueTable;

{/* <AnimateInOut visible="true" delay="0" in="animate__backInLeft" out="animate__backOutRight">
                    <NameValueCell key={i}
                        company={x.company}
                        role={x.role}
                        length={x.length}
                        languages={x.languages}
                        info={x.info}
                    />
                </AnimateInOut> */}