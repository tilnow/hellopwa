window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

yaelicons=[
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAIAAAD+EZyLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABvSURBVGhD7c+xDYAADMCwwv8/l4UnUtlL5jy7O0e9fy/y1uStyVuTtyZvTd6avDV5a/LW5K3JW5O3Jm9N3pq8NXlr8tbkrclbk7cmb03emrw1eWvy1uStyVuTtyZvTd6avDV5a/LW5K3JW9Pdt5kPoC0DjyMTfBIAAAAASUVORK5CYII=",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAIAAAD+EZyLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPNSURBVGhD7Zq/TvMwFMXbTxULggFYisSIkLozFSQGNhhZmCohXqAP0AUx8ATsvAAMwAYTLExsSCAkNljoUqaiSHBbHyyTNO61Y8cu+n4L162d+MT3xH9K9evrq/JH+Ye/f5H/2iaTkvz28fHR7XZRqFTm5+dnZmZQ8Adp88f+/j5uk0Oz2by6uur3+2jgFL/aer3e0dERdGghhWjjDr/aVDgi2+02arugPG0CGh/oyOfx8RG1i1G2NuL09BQi8kHVYgRbl1SrVUQ5vL6+1ut1FKwINr+9vLwgymFxcRGRLSHXkzTpzc7OopADvWmtZ8KQ6xLq9PT0NAo57O3tITIn/D5grPEIu05Oxnry9vYWkRH0SMJyf3+PrmixWLiE15YkydbWFhRoQQM24f1GcF6YAqPeRuE3/lveyHhRjBvBeVtKmH2eyH339fU1Ij30DGKg1WqhQzxubm7QMp9Yxm15eRkRj/X1dUT5xKKtVqshcsdE+o1JLNrOz88R8SA7IdIgbBcc9IbH8fExmmmJZdz6/T4iBhsbG4i0BNa2trZGs/b29vbU1NT7+zs+HUej0Xh6ehIxzXWfn58iToPxC4F65iXOtpiLZmJubo7qdzodipvN5vB6aYJpu7i4EL2UPDw80Oerq6som0D7d3FZlWDa0CkF0T8j46mIR6MSRhu6k2FpaYm+5RsvxfPzs7i+IIC2bDaqiMevGu/k5ITchYIWYUJJ2dr4Z+btdptiehCi4dgTMYEqr+z9G3OfJnpF+3G5bX17e2OexkpFpc5vRhtQQt2P1+v13d1dFJgMBq8U9DZLgTYK/PcnGpTmN47NJIeHh2imsLOzg6+1oPaQkrThzjzQ5jecJQvpR+0hZWjDnXmgTYZer4caObRaLVT9wbs2zi+JkpHZKNnc3ES9USRJgno/+NVW3GYpVlZWUPs3WWGEX224Mw+00UKZmZWXspnEozbcmQfa8FCTkyY9fJrBlzaHNsuiLqZHZqPAizYjm6GNOWOPX92vJ32c7NvheD15dnaGiAGlIiJPDEfPDUYrRlOPWeAyJ+PJRoGznIxNGOFG2+XlJSIGzP86dMAgMYvhdSorggO/RZiNgqI5Ga0wopC2SG0mGSSmFdHaTGLvt5izUWCZk/ELI2y0xW4zySAxDUFLBkFsJjH2W7fbXVhYQGEcphd3i827hGm2sMIIG7/pz9IE3vdmHOjpWqA/5Q1rM4mltiRJoCNDJMIIS23EyB9W4hFG2GsjUqNHUxm+iINC2gjVePgoGhzs32iZcnd3d3BwgHI0ONAWKZXKN8I0zkXGp6C+AAAAAElFTkSuQmCC",
"data:image/png;base64,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",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABQCAIAAADayM/YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOqSURBVHhe7ZzNUSMxEIXtvVMFDoADJgJ+nIBxBiYFSIGNwEAGUMWZwzgEnABVdgY4BHMgAPaV9HZK1rCu7pGQZVbfgW3NMNL0PHWrNTbb/fz87PxQfvHfn0jxbTcpvu0mOt+Wy2U3CRcXFxiLo7YGa4CQ1Wp1cHDAy76f8XjMgdui0G2xWLy/v7Px/YSPpfAtpWhRUPiWUjTw8fEROKKi5sKcPD09tXZVVUdHR9aOy2QymU6nMIbD4cvLiz3YEht2EtyR3t7eeDQ2V1dXdojBYIDsxaOtyC7eer2eNfb29gJHzC7eoJU1wuOt6GYouoVSdBNRdDMU3ULJUbfZbMa9l4bHx0de/5ccdcNukpaG6+trz4HsdLu8vKSl5+bmhpahxJuIOLohbFC2s6EBd49pyYYhO91w6vn5GTs6GCqwVzo5OWEvhoi6lf2bIfQpyih1iYiim6HoFkrRTUTRzfD/6tbu46vmB1E56nZ2dkZLQ7/f97rNTrfmNkyOt8fJTrf6YYeTnW7NVwNyRqMRLUN2uuEmMLWwx7GgKTRw1Xg8Zi/rhOum2OPM53Ne8517nKqq7BBJP+8OfYoy4NJwOIRxfHxsj7SHPgpIoxtAOgFsBJCdbgChCNgIIE6ezJMcdWuC0gzlwWKxYFsI56aAZPHWxNYug8GAbRnZvedq4hZluAceFZB7vE2n09vbWzaU9xAt3nD2twGBUf/kuXjoYp76Cdgcbzyxzt3dHU+3hR0ZsKbzqIw4ut3f39Na5+HhgVYrZrMZLYN2IsSJN8hIa52Q73fiebmf6WF0W4spoH4CNuTJetPlgRTH39DDLgxwrEVmjhZvcM/dvOCndjly8eYI5jZPaNjC+oZKf/My5Q5k4Qklqdc35AMsWQikbrfLQw3c6LXis6Ek2vomxH1A/3oT8fT0RMu8WaClJ7Vu7gNyi6maXq/3+vrKRqdzfn5OS882dUOH3iLRrPQnkwktPal1QwqlZej3+7V7cKyqqvoJYrjApX8LedJLg/DBvEPw/7Bicy6VEG19U9H8wgYqT1qGdguaxxZ0A7jcey3pztXwbyhYUsebBZ7U7yEtblI5PDyMMlbqPOlSf5XEI9bGL87fdcDt+kk37f39fS89WnC2fvtfg99065Ig7NSU0CzzhGwomr2ZGVJeN2mZJ7Wwi6+oFzEoHJiiPFLoBtjFVyAlYgGAYnEdAwrfcBNfho0EdpEW3RrghYcEFMQhgodQ/s+B3aT4tpv8XN86nT+iwfg3e/xPWgAAAABJRU5ErkJggg==",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABQCAIAAADayM/YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO0SURBVHhe7ZstbzJBEMfhMQhCCQgIsoImFIUA1y9Qh4XvUAMah+8XwJNQXVXbCgQ4sKgmVACtQNTwTJnhstztbW7v9o2mP0Fn9nowc/+ZWXrQ9OFwSP1S/tHP34hEbukj+/2efOeR1i2bzXa73e/vb/IdRqLfQDSyGNbrdalUIscxJHR7eHggi6FcLjtbqHJzkisdi1NTV/Gc/Jk26fTT0xP5VlGsm4cLAura36JfBX3oys0FNObW6/XIsoSufkPsdp2cbtwtTsDNzQ1ZNpDTbbVaXV9fkxMNi9LJ5QZcUFlqn5MWNwMTe8DHxwdZZtFek4iVyvzbuxmq1SpZ5+RyObJ4NJtNskwC1SLF8/MznRlAvPvR+QaR7jfgUlpOcb+9v7+TFcB8WZrTDTAsndE5aXgf/9sDJBHUnknp4uQGoYs7BxLo9/vkWAQDjQGdH06lUiHrnJeXF3oKzcSZkx7iAvt59pBfSPKi0UnUb+IQITEzOYSRdJYUCgWyeIR9JGJmoiTNbbPZkMUjk8lMp1NyjKOmbAQ64PNzf0F3xarZ3wRRmik/LmpyExM2VN7e3sjSg+JRFqYSvIr5sjShG1Cv17WmwUX9FuSOdOp1C4sVu05fJkEM1aSAx8dHspSD11I5nU6HXuAcODQajcg5gacoR32/eXC76/Pz8+rqKnhIRxgaa5Ibbj6fh8f1eo2uVuz0W6lUur29JUcbGmsSEcx93yHlkWjXDSIOSrRcLuHRl4zyLxdp1w0JGx5apbO2vxWLRXhcLBbo6sBQbiCI74Oe7XYLj7Va7e7uDleA+/t7slRgqCaRKJWpMB6jNdlut8k6h81HpXTwvIahFz6Bi6+vr+judjtcQTfJzUwLuQ2HQ4wbodVTMuQwl4B8eSzkBlDUR2CW4GKhUEADoGNHaEkeo7OERbyzKZku1vY3QcRsYrPZjCx5rOUGsB+GhN3zajQaZMUArp9FvD9hyT8Xcz6f02osrPWbB1QgvGX5+vpCGxeRhLHZrElkOp1iYj6SX3T7unn4RAMuXjcBwWylcCW3hGlwcSK38XhMVoAkOTvRb2wCMFparRY5R2JHaF83nzLNZnMwGJBzJPaNZ7d084IJlmKMOJ3oN/xOJvvWkc0EZYzReK7sbxC6LxJuMlLRurIHBIOGFVDMty73n3VwsstMJhMK9AQdiIBD77m4FItFvNvnET1g13NLMjBd6bcwktx4dj23Wq1G1hGpb1C5XpMAW5ZS0bquG+Dl492fjcgF6BaTVOo/Pi4w0WQIYP0AAAAASUVORK5CYII=",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABQCAIAAADayM/YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJSSURBVHhe7do9jylhFMBx1y3EruBGSxQSIToNUVApthClZLPeohEVovUtfAISr1/AywbRSWiEQikkJCpC4/We8GRDcss9c3M251fs7plR7D8znpkJv67Xq+yHkovfPxG30cRtNHEbTdxGE7fRxG00cRtN3EYTt9HEbTRxG03cRhO30cRt3+T9Rgz4JG37fSMGCVwl8fn5mU6n/9xkMpleryd2YEJvW61Wfr9fLpdbrdZQKBQMBi0WCxy9WCy23+/Fi3DgtsF/7/F4DAZDo9E4Ho/3jfBHpVJ5fX2Fzq+NGHDb8vm8UqkcjUZiflAul+EALhYLMSPA/Uw4Ho9Pp9NOpyPmZ5vNRqVS4a0uuOukTqdbLpeXy0XMzzQaDeqyidsWCATm83kqlYI3ntgkpfupiadYLKrVapPJlM1m2+32er0WO/BJcX2bTCaJRAJWy5eXFzhL397eSqXS4XAQu9FI0Xa32+0Gg0Eul/N6vQqFwm63/3P9/EbStT0aDocOh0Ov189mM7EJwf95DoCDVq/XYf2EC6DYhAC37Xw+b7dbMTzTarVmsxmu3WJGgNsGN5NOp7NarYr5wXg87vf7LpdLzBjEuYkDbhc/Pj7g5qNWq33dOp5Op1arZTQa3W436u0y+loCy2M0Gr0/B4TD4UgkYrPZYPT5fHBUxYtwSLROdrtduDuB9xhIJpPNZlPswCTp9yfhoQZ+FgqF+4hN0msALJtADPj4e680cRtN3EYTt9HEbTRxG03cRhO30cRtNHEbTdxGE7fRxG00cRtN3EaRTPYXCOkpCueVO30AAAAASUVORK5CYII="
];

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
  page1html=page1html+'<input type="checkbox" id="cbx_'+thing.id+'" value="line_'+thing.id+'" >'//had inline: onclick="alert(\'i have been clicked\');return false;"
//maybe add one of these and yes make it a form, at least so we can change page: <input type="submit" value="Submit">

  page1html=page1html+thing.question;
  thing.col.forEach(function(obj,ind){var x=0;if(obj==true)x=1;page1html=page1html+'<img src="'+yaelicons[(ind+1)*x]+'" width="20" height="20" alt="x">';})//use ind later when i insert real images
  page1html=page1html+'<button class="shorthelp" onclick="alert(\''+thing.shorthelp+'\')">Help</button>'
  page1html=page1html+"</p></div>";
}
xmlhttp.open("GET", './page1.json', true);
xmlhttp.send();
