/*
var x;
let x;
export will make it public and will allow access for importing
*/
import React from 'react';
import './button.css'

const sum = (a,b) => a+b; //dynamic JS code to include in React - check button
const click = "click";

//props is an object
export const Button = (props) => (
    <button className={props.type}>
      <span className={props.isBig ? "big" : ""}>
        Click
      </span>
    </button>
);
