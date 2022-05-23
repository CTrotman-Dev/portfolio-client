import React from "react";

import NameValueTable from "../components/Table/NameValueTable";

import clientData from "../clientData";
const Clients = () => {

  return (

    <div className="row">
      <NameValueTable data={clientData}/>
    </div>
  );
}

export default Clients;