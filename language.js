function showit(myDIV) {
    if (myDIV.style.display === "none") {
      myDIV.style.display = "block";
    } else {
      myDIV.style.display = "none";
    }
  }

  function show() {
    var myDIV = document.getElementById("mycls");
    showit(myDIV);
  }

  show();
    setTimeout(show, 25000);

 var header = document.getElementById("myDIV");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


  console.log('woking');