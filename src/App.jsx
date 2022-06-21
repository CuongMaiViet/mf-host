import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Child1 from "child1/Child1";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <Child1 />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
