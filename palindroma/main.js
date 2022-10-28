"use strict"
// Chiedere all’utente di inserire una parola
let userWord=(prompt("inserisci una parola"));
// Creare una funzione per capire se la parola inserita è palindroma
let palindroma= ""
for(let i = userWord.length -1; i >= 0; i--){
    console.log(userWord[i]);
    palindroma += userWord[i]
    if(palindroma === userWord) {
        alert("Questa parola è palindroma")
    }
}
if(palindroma !== userWord) {
    alert("Questa parola non è palindroma")
}



