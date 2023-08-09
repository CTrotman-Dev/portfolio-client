import React from "react";
import TitleBanner from "../../components/TitleBanner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeSnippet from "../../components/CodeSnippet";
import Seo from "../../components/SEO";
const ReactBasics = () => {
  const metaData = [
    {
      name: "keywords",
      content: "React, code, develop, developer, basics, learn",
    },
  ];

  const simpleCode = `function Greeting(props) {
            return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
          } `;
  const greetingCode = `import React from 'react';<br/>import Greeting from './Greeting';<br/><br/>function App() {<br/>&nbsp;&nbsp;return (<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="app"&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Greeting name="Alice" /&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Greeting name="Bob" /&gt;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>&nbsp;&nbsp;);<br/>}<br/><br/>export default App;`;

  return (
    <div className="row devGuides">
      <Seo title="React Basics" meta={metaData} />
      <TitleBanner text="ReactBasics" />
      <div className="devContent">
        <p>
          React is a JavaScript library for building user interfaces. It lets
          you create reusable components that can render dynamic data and handle
          user interactions.
        </p>
        <p>
          React components are functions or classes that return JSX, which is a
          syntax extension that looks like HTML but can contain JavaScript
          expressions. JSX is compiled into JavaScript by a tool called Babel.
        </p>
        <p>
          For example, this is how you write a React component that renders a
          greeting message:
        </p>
        <SyntaxHighlighter language="jsx" style={coy}>
          {simpleCode}
        </SyntaxHighlighter>
        <p>
          The Greeting component is a function that takes an object called props
          as an argument. Props are the properties that are passed to the
          component when it is used. The component returns JSX that renders an
          &lt;h1&gt; element with the value of props.name inside it.
        </p>
        <p>
          React components can be composed together to create complex user
          interfaces. To use a component, you need to import it and then write
          its name as a JSX tag. You can also pass props to the component using
          attributes.
        </p>
        <p>
          For example, this is how you use the Greeting component in another
          component called App:
        </p>
        <CodeSnippet language="jsx" code={greetingCode}></CodeSnippet>

        <p>
          The App component is a function that returns JSX that renders a
          &lt;div&gt; element with two &lt;Greeting&gt; elements inside it. The
          &lt;Greeting&gt; elements have different name props that are passed to
          the Greeting component.
        </p>
        <p>To learn more about React, you can visit these websites:</p>
        <ul>
          <li>
            <a href="https://reactjs.org/tutorial/tutorial.html">
              React Official Tutorial
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/react/">
              W3Schools React Tutorial
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/learn/front-end-libraries/react/">
              FreeCodeCamp React Course
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReactBasics;
