$(document).ready(function() {
  //Un paragrafo espone 5 numeri casuali diversi.
  var pcNumber = [];
  for (i = 0; i < 5; i++) {
    var randomNumber = Math.floor(Math.random() * 100); + 1;
    pcNumber.push(randomNumber);
    console.log(pcNumber);
    document.getElementById("list_number").innerHTML = pcNumber;
  }

  //Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

  setTimeout(timeOut, 3000);

  function timeOut() {
    $("span").hide();
  }


  for (i = 0; i < 5; i++) {
    var requestNumber = Number(prompt("Inserisci i numeri visualizzari precedentemente"));
  }

  //Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
});
