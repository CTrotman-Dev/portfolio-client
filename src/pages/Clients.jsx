import React from "react";

import NameValueTable from "../components/Table/NameValueTable";
import TitleBanner from "../components/TitleBanner"

import clientData from "../clientData";
const Clients = () => {

  return (

    <div className="row">
    <TitleBanner text="Clients" />
      <NameValueTable data={clientData}/>
    </div>
  );
}

export default Clients;