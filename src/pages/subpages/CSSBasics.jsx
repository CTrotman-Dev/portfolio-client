import React from "react";
import TitleBanner from "../../components/TitleBanner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
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
      <div className="devContent">
        <p>
          CSS stands for Cascading Style Sheets. It is the language that
          describes how HTML elements are displayed on the screen.
        </p>
        <p>
          CSS consists of rules that specify the style of an element or a group
          of elements. Each rule has a selector and a declaration block. The
          selector determines which elements the rule applies to, and the
          declaration block contains one or more declarations that define the
          style properties and values.
        </p>
        <p>
          For example, this is how you write a CSS rule that changes the color
          and font size of all paragraphs in HTML:
        </p>
        <SyntaxHighlighter language="css" style={coy}>
          {/* p {
            color: blue;
            font-size: 18px;
          } */}
        </SyntaxHighlighter>
        <p>
          The p selector matches all &lt;p&gt; elements in HTML, and the
          declaration block contains two declarations: one for the color
          property and one for the font-size property. The color value is blue
          and the font-size value is 18px.
        </p>
        <p>
          CSS rules can be written in three ways: inline, internal, or external.
          Inline CSS means writing the style attribute directly in the HTML
          element. Internal CSS means writing the &lt;style&gt; element inside
          the &lt;head&gt; element of the HTML document. External CSS means
          writing the CSS rules in a separate file and linking it to the HTML
          document with the &lt;link&gt; element.
        </p>
        <p>For example, this is how you write inline CSS:</p>
        <SyntaxHighlighter language="html" style={coy}>
          &lt;p style="color: blue; font-size: 18px;"&gt;This is a
          paragraph.&lt;/p&gt;
        </SyntaxHighlighter>
        <p>This is how you write internal CSS:</p>
        <SyntaxHighlighter language="html" style={coy}>
          &lt;head&gt;
          <br />
          &nbsp;&nbsp;&lt;style&gt;
          <br />
          {/* &nbsp;&nbsp;&nbsp;&nbsp;p {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: blue;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: 18px;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&lt;/style&gt;<br/>&lt;/head&gt; */}
        </SyntaxHighlighter>
        <p>This is how you write external CSS:</p>
        <SyntaxHighlighter language="html" style={coy}>
          &lt;head&gt;
          <br />
          &nbsp;&nbsp;&lt;link rel="stylesheet" href="style.css" /&gt;
          <br />
          &lt;/head&gt;
        </SyntaxHighlighter>
        <SyntaxHighlighter language="css" style={coy}>
          /* This is the style.css file */
          <br />
          {/* p {<br/>&nbsp;&nbsp;color: blue;<br/>&nbsp;&nbsp;font-size: 18px;<br/>} */}
        </SyntaxHighlighter>
        <p>To learn more about CSS, you can visit these websites:</p>
        <ul>
          <li>
            <a href="https://www.w3schools.com/css/">W3Schools CSS Tutorial</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">
              MDN Web Docs CSS Tutorial
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/learn/responsive-web-design/basic-css/">
              FreeCodeCamp CSS Course
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSBasics;
