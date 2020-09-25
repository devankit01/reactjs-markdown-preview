import React, { useState } from "react";
// import { marked } from 'marked';
let marked = require("marked");

function App() {
  const [output, setoutput] = useState("");
  const handle = (e) => {
    console.log(e.target.value);
    setoutput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>

      <div className="parent">
        <div className="Input">
          <h2>Input</h2>
          <textarea onChange={handle} value={output} placeholder="Type in Markdown format "></textarea>
        </div>
        <div className="Output">
        <h2>Output</h2>

          <span
            dangerouslySetInnerHTML={{
              __html: marked(output, { sanitize: true }),
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default App;
