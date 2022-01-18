/* same as the code above
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

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <h1>Hello {fname + " " + lname}!</h1>
    <h1>Hello {`${fname}  ${lname}`}!</h1>
    <p>
      test {num}
      {Math.floor(Math.random() * 10)}
    </p>
    <img src={imgName} alt="picsum" />
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
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
    </div>
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
