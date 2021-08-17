import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let counter = 0;

const button = document.getElementById('reset');

const btn = document.getElementById('start');

function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(
    el, document.getElementById('root')
  );
}

var myVar; 

function myFunction() {
  myVar = setInterval(show, 1000);
}

btn.onclick = function() {myFunction()}

function reset() {
  clearInterval(myVar);
  counter = counter - counter;
  const el = <p>{counter}</p>;
  ReactDOM.render(
    el, document.getElementById('root')
  );
};

button.onclick = function() {reset()};
