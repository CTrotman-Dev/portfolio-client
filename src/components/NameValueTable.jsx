import React, { useState, useEffect } from "react";


import NameValueCell from "./NameValueCell";

const NameValueTable = (props) => {
    
    return (
        <div>
            {props.data.map((x,i) =>
                <NameValueCell key={i}
                    company={x.company}
                    role={x.role}
                    length={x.length}
                    languages={x.languages}
                />
            )}
        </div>
    );
}

export default NameValueTable;