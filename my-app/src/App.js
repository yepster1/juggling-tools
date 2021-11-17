import "./App.css";
import { convertStringToSync } from "./tools/siteSwap.ts";
import { Input, Button } from "@material-ui/core";
import React, { useCallback } from "react";
function App() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  const setCaller = useCallback(() => {
    if (input.length % 2 === 0) {
      const result = convertStringToSync(input);
      setOutput("left shift: " + result[0] + " right shift: " + result[1]);
    }
  }, [input, setOutput]);

  return (
    <div className="App">
      <header className="App-header">
        <Input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        >
          {" "}
        </Input>
        <Button onClick={setCaller}>Click me</Button>
        <p>{output}</p>
      </header>
    </div>
  );
}

export default App;
