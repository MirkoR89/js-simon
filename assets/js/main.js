$(document).ready(function() {
  //Un paragrafo espone 5 numeri casuali diversi.
  $("p span").each(function(index, el) {
    $(this).text(Math.floor(Number(Math.random() * 100) + 1));
  });

  //Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

  setTimeout(timeOut, 3000);

  function timeOut() {
    $("p span").hide();
  }

  setTimeout(userNumbers, 4000)

  function userNumbers() {
    var userNumber2 = Number(prompt("Inserisci il 1° numero"));
    var userNumber3 = Number(prompt("Inserisci il 2° numero"));
    var userNumber4 = Number(prompt("Inserisci il 3° numero"));
    var userNumber1 = Number(prompt("Inserisci il 4° numero"));
    var userNumber5 = Number(prompt("Inserisci il 5° numero"));
  }

  //Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


});
