import React from "react";
import ReactDOM from "react-dom";
/* same as the code above
var React = require("react");
var ReactDOM = require("react-dom");

*/
const fname = "Nicki";

const lname = "Wong";

const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <h1>Hello {fname + " " + lname}!</h1>
    <h1>Hello {`${fname}  ${lname}`} !</h1>
    <p>
      {" "}
      test {num}
      {Math.floor(Math.random() * 10)}
    </p>

    <h1>My Favourit Foods </h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Jamon</li>
    </ul>
  </div>,
  document.getElementById("root")
);

/* same as the code above
var h1= document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1);
*/
