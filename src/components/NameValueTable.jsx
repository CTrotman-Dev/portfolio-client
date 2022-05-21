import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import NameValueCell from "./NameValueCell";

const NameValueTable = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = "/api/showcase";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                
                setData(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    },
        []
    );
    return (
        <div>
            {data.slice(0).reverse().map((x,i) =>
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