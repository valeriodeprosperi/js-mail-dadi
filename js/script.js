// chiedo la mail all'Utente
var mailUtente = prompt("inserisci la tua email");
console.log(mailUtente);
// creo array con lista mail valide
var mailValide = ["marioo@gmail.com", "leo@gmail.com","mattia@gmail.com","valerio@gmail.com"];
console.log(mailValide[i]);
// creo variabile se mail non è valida
var mailCorretta = false;
// uso  array + ciclo for per far analizzare le mail corrette e se l'utente ha la possibilità di accedere con la mail corretta
for (var i = 0; i < mailValide.length; i++) {
  if (mailUtente == mailValide[i])
  var mailCorretta = true;
}
