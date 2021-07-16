

function loadDoc(xFunction) {
    const xhttp=new XMLHttpRequest();
    xhttp.onload = function() {xFunction(this);}
    xhttp.open("GET", "https://api.slothpixel.me/api/skyblock/bazaar/");
    xhttp.send();
  }
  
  function myFunction(xhttp) {
    document.getElementById("demo").innerHTML =  xhttp.responseText;
  }