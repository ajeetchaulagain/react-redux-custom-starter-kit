import React from "react";
import { render } from "react-dom";

const Hello = () => {
  return (
    <h1>
      Hello Developers. Enjoy your React/Redux development with this starter
      environment !
    </h1>
  );
};

render(<Hello />, document.getElementById("app"));
