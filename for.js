var arr = [
    'History of javaScrpit',
    'Let\'s wirte some code .......'
];
var i =0;
function next(){
    
    var next = document.getElementById("next");
    
    next.innerHTML = arr[i];
    i++;
}