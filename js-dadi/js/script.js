

// creo variabile per fare numero random giocatore valerio
var valerio = Math.floor(Math.random() * 6) + 1;
alert("il tuo numero è: " + valerio)
console.log(valerio);
// creo var giocatore marco
var marco = Math.floor(Math.random() * 6) + 1;
alert("il tuo numero è: " + marco)
console.log(marco);

// creo var esito vincitore
var esito = "";
// se numero maggiore valerio di marco allora vince valerio altrimenti il contrario
if (valerio > marco){
  esito = "ha vinto Valerio!";
}else if(marco > valerio){
  esito = "ha vinto Marco!";
}else{
  esito = "siete pari";
}
