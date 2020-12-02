//Un paragrafo espone 5 numeri casuali diversi.
var pcNumber = [];
for (i = 0; i < 5; i++) {
  var randomNumber = Math.floor(Math.random() * (100 - 1)); + 1;
  pcNumber.push(randomNumber);
  console.log(pcNumber);
}
document.getElementById("list_number").innerHTML = pcNumber;
console.log(pcNumber);
//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

//Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


/*------------------------ CORREZIONE ESERCIZIO ----------------------------- */
//Funzione per generare numeri random.
/*function randomNumberFromTo(min, max) {
  return Math.floor(Math.random() * (max - min)); + min;
};
//Un alert espone 5 numeri casuali diversi.

var listNumberRandom = [];

while (listNumberRandom.length < 5) {
  var numberRandom = randomNumberFromTo(1, 10);
  if (!listNumberRandom.includes(numberRandom)) {
    listNumberRandom.push(numberRandom);
  }
}
console.log(listNumberRandom);
//Aleert utente
alert(`Ricorda questi numeri [${listNumberRandom}]`);

//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

setTimeout(function() {
  var listUserNumber = [];
  for (var i = 0; i < 5; i++) {
    userNumber = Number(prompt("Inserisci i numeri visti precedentemente"));
    if (!listUserNumber.includes(userNumber)) {
      listUserNumber.push(userNumber);
    }
  };
  //Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
  var guessNumber = [];
  for (var i = 0; i < listUserNumber.length; i++) {
    if (listNumberRandom.includes(listUserNumber[i])) {
      guessNumber.push(listUserNumber[i]);
    }
  };
}, 3000);

  // alert score e numeri indovinati
  alert(`Indovinati: ${guessNumber.length}`);
  alert(`Hai indovinato questi numeri: ${guessNumber}`);*/
