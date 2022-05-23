import React from "react";

import NameValueTable from "../components/Table/NameValueTable";

import educationData from "../educationData";
const Education = () => {
    return (
        <div className="news-page row">
            <h1>Education</h1>
            <NameValueTable data={educationData}/>

        </div>
    );
}

export default Education;