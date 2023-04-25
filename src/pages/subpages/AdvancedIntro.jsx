import React from "react";
import TitleBanner from "../../components/TitleBanner";
import Seo from "../../components/SEO";
const AdvancedIntro = () => {
  const metaData = [
    {
      name: "keywords",
      content: "advanced, code, develop, developer, basics, learn",
    },
  ];

  return (
    <div className="row devGuides">
      <Seo
        title="Advanced Intro"
        description="Training guide on the advanced code developement techniques."
        meta={metaData}
      />
      <TitleBanner text="Advanced Intro" />
      <div className="devContent"></div>
    </div>
  );
};

export default AdvancedIntro;
