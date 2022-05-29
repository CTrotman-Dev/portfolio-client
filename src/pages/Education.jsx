import React from "react";

import NameValueTable from "../components/Table/NameValueTable";
import TitleBanner from "../components/TitleBanner";

import educationData from "../educationData";
const Education = () => {
    return (
        <div className="education-page row">
            <TitleBanner text="Education"/>
            <NameValueTable data={educationData}/>

        </div>
    );
}

export default Education;