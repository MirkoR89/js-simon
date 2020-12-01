$(document).ready(function() {
  //Un paragrafo espone 5 numeri casuali diversi.
  $("p span").each(function(index, el) {
    $(this).text(Math.floor(Number(Math.random() * 100) + 1));
  });

  //Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
  setTimeout(function() {
    $("p span").hide();
  }, 10000);

  //Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
});
