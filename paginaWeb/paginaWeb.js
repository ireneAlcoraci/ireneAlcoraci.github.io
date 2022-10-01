const risposte = ["si", "no", "forse"];

function clicca(){
    num = Math.floor(Math.random() * 3);
    var risp = risposte[num];
    document.getElementById("par").innerHTML = risp;
}
