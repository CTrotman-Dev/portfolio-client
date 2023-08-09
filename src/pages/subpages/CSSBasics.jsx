import React from "react";
import TitleBanner from "../../components/TitleBanner";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import Seo from "../../components/SEO";

const CSSBasics = () => {
  const metaData = [
    {
      name: "keywords",
      content: "css, code, develop, developer, basics, learn",
    },
  ];

  return (
    <div className="row devGuides">
      <Seo
        title="CSS Basics"
        description="Training guide on the basics of how to develop CSS code."
        meta={metaData}
      />
      <TitleBanner text="CSS Basics" />
     
    </div>
  );
};

export default CSSBasics;
