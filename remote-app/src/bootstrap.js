import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";

const App = () => (
  <div>
    <h2>Micro Frontend (Remote)</h2>
    <Button />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));