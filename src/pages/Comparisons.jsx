import React from "react";

import { Link } from "react-router-dom";

import Seo from "../components/SEO";
import TitleBanner from "../components/TitleBanner";
const Comparisons = () => {
  const metaData = [
    {
      name: "keywords",
      content: "comparison,best,top,tech",
    },
  ];
  const items = [
    {
      text: "Phones",
      href: "/compare/phones",
    },
    {
      text: "Tablets",
      href: "/compare/tablets",
    },
    {
      text: "Laptops",
      href: "/compare/laptops",
    },
    {
      text: "GPU's",
      href: "/compare/graphicscards",
    },
    {
      text: "TV's",
      href: "/compare/tvs",
    },
    {
      text: "PSU's",
      href: "/compare/powersupplys",
    },

    // {
    //   text: "C# Basics",
    //   href: "/guides/CSharpBasics",
    //   children: [
    //     {
    //       text: "C# 1",
    //       href: "/guides/CSharp/CSharp1",
    //     },
    //   ],
    // },
  ];
  return (
    <div className="row ">
      <Seo
        title="Comparison Menu"
        description="Table of contents for the Comparison section of website."
        meta={metaData}
      />
      <TitleBanner text="Comparison Menu" />
      <div className="guideLinks">
        <ul className="table-of-contents">
          {items.map((item, index) => (
            <li key={index} className="toc-item">
              <Link to={item.href}>{item.text}</Link>
              {item.children && (
                <ul className="toc-sublist">
                  {item.children.map((child, index) => (
                    <li key={index}>
                      <Link to={child.href}>{child.text}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comparisons;
