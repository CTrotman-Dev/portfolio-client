import React from "react";
import TitleBanner from "../../components/TitleBanner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import Seo from "../../components/SEO";
const JavaScriptBasics = () => {
  const metaData = [
    {
      name: "keywords",
      content: "JavaScript, js, code, develop, developer, basics, learn",
    },
  ];

  return (
    <div className="row devGuides">
      <Seo
        title="JavaScript Basics"
        description="Training guide on the basics of how to develop JavaScript code."
        meta={metaData}
      />
      <TitleBanner text="JavaScript Basics" />
      <div className="devContent">
        <p>
          JavaScript is a scripting language that enables you to create dynamic
          and interactive web pages. It can run in the browser or on the server.
        </p>
        <p>
          JavaScript consists of statements that perform actions or
          calculations. Each statement ends with a semicolon (;). Statements can
          be grouped together in blocks using curly braces ({}).
        </p>
        <p>
          For example, this is how you write a JavaScript statement that
          displays an alert message in the browser:
        </p>
        <SyntaxHighlighter language="javascript" style={coy}>
          alert("Hello World!");
        </SyntaxHighlighter>
        <p>
          JavaScript has many built-in objects that provide useful features and
          methods. For example, the Math object has methods for mathematical
          operations, such as Math.pow(x, y) which returns x raised to the power
          of y.
        </p>
        <p>
          For example, this is how you write a JavaScript statement that
          calculates and displays 2 to the power of 10:
        </p>
        <SyntaxHighlighter language="javascript" style={coy}>
          alert(Math.pow(2, 10));
        </SyntaxHighlighter>
        <p>
          JavaScript also has many built-in operators that perform operations on
          values and variables. For example, the assignment operator (=) assigns
          a value to a variable, the addition operator (+) adds two values
          together, and the equality operator (==) compares two values for
          equality.
        </p>
        <p>
          For example, this is how you write a JavaScript statement that assigns
          the value 42 to a variable named answer and then checks if it is equal
          to 42:
        </p>
        <SyntaxHighlighter language="javascript" style={coy}>
          var answer = 42;
          <br />
          alert(answer == 42);
        </SyntaxHighlighter>
        <p>
          JavaScript also has many built-in data types that represent different
          kinds of values. For example, the number type represents numeric
          values, the string type represents text values, and the boolean type
          represents true or false values.
        </p>
        <p>
          For example, this is how you write a JavaScript statement that creates
          a number variable named age and assigns it the value 21:
        </p>
        <SyntaxHighlighter language="javascript" style={coy}>
          var age = 21;
        </SyntaxHighlighter>
        <p>To learn more about JavaScript, you can visit these websites:</p>
        <ul>
          <li>
            <a href="https://www.w3schools.com/js/">
              W3Schools JavaScript Tutorial
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">
              MDN Web Docs JavaScript Tutorial
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/">
              FreeCodeCamp JavaScript Course
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JavaScriptBasics;
