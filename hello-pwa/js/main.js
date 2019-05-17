window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


document.getElementById("p1").innerHTML = "New text and db!+"+localStorage.getItem("data");
localStorage.setItem("data", Date());
var page1data=require('./page1.json');
document.write(page1data[1].question);
document.write(page1data[1].col3);
