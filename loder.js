var a = 0;
setInterval(aim, 1000);
function aim() {
  if(a == 200){
    window.location = "frist.html";
    clearInterval()

  }
  else{
    a = a + 10;
  var y = document.getElementById("loading");
  y.style.width = a + "px";
  }
}
