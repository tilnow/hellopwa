window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


//document.getElementById("p1").innerHTML = "New text and db!+"+localStorage.getItem("data");
//localStorage.setItem("data", Date());
var xmlhttp = new XMLHttpRequest();
var page1data;
var page1html="";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        page1data = JSON.parse(this.responseText);
        page1data.forEach(function(obj){addline(obj)});
        document.getElementById("questions").innerHTML=page1html;
//        document.write(page1data[1].question);
//        document.write(page1data[1].col3);
    }
};
function addline(thing){//shoudl we be in a form? not clear as no real submit
  page1html=page1html+"<div id='line_"+thing.id+"'><p>";
  page1html=page1html+'<input type="checkbox" name="cbx_'+thing.id+'" value="line_'+thing.id+'" onclick="alert(\'i have been clicked\');return false;">'
//maybe add one of these and yes make it a form, at least so we can change page: <input type="submit" value="Submit">

  page1html=page1html+thing.question;
  page1html=page1html+"</p></div>";
}
xmlhttp.open("GET", './page1.json', true);
xmlhttp.send();
