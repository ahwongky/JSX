/* same as the code above
If you use ES6 with npm, you can write import ReactDOM from 'react-dom'. 
If you use ES5 with npm, you can write var ReactDOM = require('react-dom').

var React = require("react");
var ReactDOM = require("react-dom");
*/

import React from "react";
import ReactDOM from "react-dom";

const fname = "Nicki";
const lname = "Wong";
const num = 12345678;
const currentYear = new Date().getFullYear();
const imgName = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
customStyle.color = "blue";

ReactDOM.render(
  <div>
    {/* 3 ways to update the fields */}
    <h1>
      Hello {fname} {lname}!
    </h1>
    <h1>Hello {fname + " " + lname}!</h1>
    <h1>Hello {`${fname}  ${lname}`}!</h1>

    {/* expression can be used directly*/}
    <p>
      test {num}
      {Math.floor(Math.random() * 10)}
    </p>
    <img src={imgName} alt="picsum" />

    {/* Can linked CSS file by className*/}
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>

    {/*     <div>
      <img
        className="food-img"
        alt="Bacon"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=980:*"
      ></img>
      <img
        className="food-img"
        alt="Noodles"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0011-landscape-pf-1567632709.jpg?crop=0.668xw:1.00xh;0.206xw,0&resize=768:*"
      ></img>
      <img
        className="food-img"
        alt="Jamon"
        src="https://hot-thai-kitchen.com/wp-content/uploads/2021/11/chili-garlic-noodles-blog.jpg"
      ></img>
    </div>*/}

    {/* Can set style in the same code directly*/}
    <h1 style={{ color: "red" }}>Hello World! </h1>

    {/* Can linked style in the same page above*/}
    <h1 style={customStyle}>Hello World! </h1>

    <p>
      Created by {fname} {lname}
    </p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);

/* same as the code above
var h1= document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1);
*/
