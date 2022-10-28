"use strict"
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
function getRdnNumber(num1,num2){
    return Math.floor(Math.random()*5)+1
}

function isEven (number) {
    if(number % 2 ===0){
        return true
    }
    return false
}