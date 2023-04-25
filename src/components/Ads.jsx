// ads.js
import React from "react";
import AdSense from "react-adsense";

const Ads = ({ dataAdUnitId }) => {
  return <AdSense client="ca-pub-xxxxxxxxxxxxxxxx" slot="xxxxxxxxxxxxxxxx" />;
};

export default Ads;

// NOTE: TO USE ADD THE FOLLOWING TO A PAGE
{
  /* <Ads dataAdUnitId="xxxxxxxxxxxxxxxx" />; */
}
