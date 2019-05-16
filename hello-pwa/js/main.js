window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


document.getElementById("p1").innerHTML = "New text and db!+"+localStorage.getItem("data");
localStorage.setItem("data",date());
