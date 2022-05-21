import React, { useState, useEffect } from "react";

import NameValueTable from "../components/NameValueTable";
import Card from "../components/Card";

const Clients = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "/api";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
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

    <div className="row">
      <NameValueTable />

      {/* {data.map(x =>
        <Card key={x.id}
          name={x.name}
          img=""
          desc=""
          type=""
        />
      )} */}
    </div>
  );
}

export default Clients;