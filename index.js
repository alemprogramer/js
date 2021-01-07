function showit(myDIV) {
    if (myDIV.style.display === "none") {
        myDIV.style.display = "block";
    } else {
        myDIV.style.display = "none";
    }
}

function show() {
    var myDIV = document.getElementById("myDIV");
    showit(myDIV);
    // fontend();
    // setTimeout(fontend, 5000)
}

function fontend() {
    var fontend = document.getElementById("fontend");
    showit(fontend);
}

function backend() {
    var backend = document.getElementById("backend");
    showit(backend);
}

function database() {
    var database = document.getElementById("database");
    showit(database);
}

function mobile() {
    var mobile = document.getElementById("mobile");
    showit(mobile);
}
// function fight() {
//   console.log("hrer");
//   var fight = document.getElementById("fight");
//   showit(fight);
// }
function fnd() {
    var fnd = document.getElementById("fnd");
    showit(fnd);
}

function desktop() {
    var desktop = document.getElementById("desktop");
    showit(desktop);
}

function iot() {
    var iot = document.getElementById("iot");
    var next = document.getElementById("next");
    showit(iot);
    showit(next);
}

function allOs() {
    var allOs = document.getElementById("allOs");
    showit(allOs);
}
show();
fontend();
backend();
database();
mobile();
// fight();
fnd();
desktop();
iot();
allOs();

console.log('woking');