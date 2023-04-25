import React from "react";

import { Link } from "react-router-dom";

import clientData from "../clientData";
import TitleBanner from "../components/TitleBanner";
const Guides = () => {
  const items = [
    {
      text: "Intro to programming",
      href: "/guides/Intro",
    },
    {
      text: "HTML Basics",
      href: "/guides/HTMLBasics",
    },
    {
      text: "CSS Basics",
      href: "/guides/CSSBasics",
    },
    {
      text: "C# Basics",
      href: "/guides/CSharpBasics",
      children: [
        {
          text: "C# 1",
          href: "/guides/CSharp/CSharp1",
        },
      ],
    },
    {
      text: "JavaScript Basics",
      href: "/guides/JavaScriptBasics",
    },
    {
      text: "React Basics",
      href: "/guides/ReactBasics",
    },
  ];
  return (
    <div className="row ">
      <TitleBanner text="Guides" />
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

export default Guides;
