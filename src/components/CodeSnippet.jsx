import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({ language, code, heading, description }) => {
  return (
    <div>
      {heading && <h4>{heading}</h4>}
      {description && <p>{description}</p>}
      <div className="codeSection">
        <pre>
          <code>{code}</code>
        </pre>
        {/* <SyntaxHighlighter language={language} style={docco}>
          {code}
        </SyntaxHighlighter> */}
      </div>
    </div>
  );
};

export default CodeSnippet;
