import React from "react";
import TitleBanner from "../../components/TitleBanner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import Seo from "../../components/SEO";

const HTMLBasics = () => {
  const metaData = [
    {
      name: "keywords",
      content: "react, helmet, js",
    },
  ];

  return (
    <div className="row devGuides">
      <Seo
        title="HTML Basics"
        description="Training guide on the basics of how to develop HTML code."
        meta={metaData}
      />
      <TitleBanner text="HTML Basics" />
      <div className="devContent">
        <p>
          HTML stands for HyperText Markup Language. It is the standard language
          for creating web pages and web applications.
        </p>
        <p>
          HTML consists of elements that define the structure and content of a
          web page. Each element has a start tag and an end tag, with some
          content in between.
        </p>
        <p>For example, this is how you write a paragraph in HTML:</p>
        <SyntaxHighlighter language="html" style={coy}>
          &lt;p&gt;This is a paragraph.&lt;/p&gt;
        </SyntaxHighlighter>
        <p>
          Some elements are self-closing, which means they do not need an end
          tag. For example, this is how you insert an image in HTML:
        </p>
        <SyntaxHighlighter language="html" style={coy}>
          &lt;img src="image.jpg" alt="An image" /&gt;
        </SyntaxHighlighter>
        <p>
          HTML elements can have attributes that provide additional information
          about the element. Attributes are written inside the start tag, after
          the element name, and consist of a name and a value.
        </p>
        <p>
          For example, this is how you specify the source and alternative text
          of an image in HTML:
        </p>
        <SyntaxHighlighter language="html" style={coy}>
          &lt;img src="image.jpg" alt="An image" /&gt;
        </SyntaxHighlighter>
        <p>
          The src attribute specifies the URL of the image file, and the alt
          attribute specifies the text that will be displayed if the image
          cannot be loaded.
        </p>
        <p>
          HTML elements can be nested inside other elements, creating a
          hierarchical structure called the HTML document tree. The root element
          of an HTML document is always the &lt;html&gt; element, which contains
          two child elements: the &lt;head&gt; element and the &lt;body&gt;
          element.
        </p>
        <p>
          The &lt;head&gt; element contains information about the document, such
          as its title and metadata. The &lt;body&gt; element contains the
          visible content of the document, such as headings, paragraphs, images,
          links, etc.
        </p>
        <p>For example, this is how you write a basic HTML document:</p>
        <SyntaxHighlighter language="html" style={coy}>
          &lt;!DOCTYPE html&gt;
          <br />
          &lt;html&gt;
          <br />
          &nbsp;&nbsp;&lt;head&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;My First HTML Page&lt;/title&gt;
          <br />
          &nbsp;&nbsp;&lt;/head&gt;
          <br />
          &nbsp;&nbsp;&lt;body&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;/h1&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;This is my first HTML page.&lt;/p&gt;
          <br />
          &nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </SyntaxHighlighter>
        <p>To learn more about HTML, you can visit these websites:</p>
        <ul>
          <li>
            <a href="https://www.w3schools.com/html/">
              W3Schools HTML Tutorial
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">
              MDN Web Docs HTML Tutorial
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/">
              FreeCodeCamp HTML Course
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLBasics;
