var arr = [
    'what is javaScrpit?',
    'History of javaScrpit',
    'Let\'s wirte some code .......'
];

var srt = `JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. 
           While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, 
           Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded,
           dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`

var i = 0;

function next() {

    var next = document.getElementById("next");
    var def = document.getElementById("def")

    if(i== 0){
        def.innerHTML =srt;

    }
    // next.style.display = 'bold'

    next.innerHTML = arr[i];
    i++;
}