window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


document.getElementById("p1").innerHTML = "New text and db!+"+localStorage.getItem("data");
localStorage.setItem("data", Date());
var xmlhttp = new XMLHttpRequest();
var page1data;
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        page1data = JSON.parse(this.responseText);
        page1data.forEach(function(obj){addline(obj)});
//        document.write(page1data[1].question);
//        document.write(page1data[1].col3);
    }
};
function addline(thing){
  var x = document.createElement("P");                        // Create a <p> node
  var t = document.createTextNode(thing.question);    // Create a text node
  x.appendChild(t);                                           // Append the text to <p>
  document.body.appendChild(x);                               // Append <p> to <body>

}
xmlhttp.open("GET", './page1.json', true);
xmlhttp.send();
