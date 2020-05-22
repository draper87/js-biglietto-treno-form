// Creo le variabili di input
var nome = document.getElementById('form-nome');
var kmPercorsi = document.getElementById('form-km');
var fasciaEta = document.getElementById('form-eta');
var genera = document.getElementById('form-genera');
var annulla = document.getElementById('form-annulla');

// Definisco le variabili per il PREZZO
var prezzo = 0.21;
var prezzoUnder18 = prezzo * 0.8;
var prezzoOver65 = prezzo * 0.6;

// Definisco le variabili di output
var nomeBiglietto = document.getElementById('bigl-nome');
var offertaBiglietto = document.getElementById('bigl-offerta');
var carrozza = document.getElementById('bigl-carrozza');
var codiceCP = document.getElementById('bigl-codicecp');
var costoBiglietto = document.getElementById('bigl-costo');
var prospetto = document.getElementById('prospetto');
var errore = document.getElementById('errore');

// Creo funzione al click del bottone Genera
genera.addEventListener('click',
  function() {
    kmPercorsiValue = parseInt(kmPercorsi.value);
    fasciaEtaValue = fasciaEta.value;

    // Verifico che gli input siano corretti, in caso negativo do errore, in caso positivo proseguo.
    if ( isNaN(kmPercorsiValue) || ( nome.value == '' )  ) {
      errore.innerHTML = 'Inserire Nome e Km da percorrere';
    }
    else {
      errore.innerHTML = '';
      nomeBiglietto.innerHTML = nome.value;
      offertaBiglietto.innerHTML = 'Offerta Standard';
      carrozza.innerHTML = Math.floor(Math.random()*10);
      function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
      }
      codiceCP.innerHTML = getRndInteger(90000,99999); // mi restituisce un numero da 90000 a 99999
      var prezzoNonArrotondato = prezzo * kmPercorsiValue;
      var prezzoArrotondato = prezzoNonArrotondato.toFixed(2);
      costoBiglietto.innerHTML = prezzoArrotondato + ' Euro';
      if ( fasciaEtaValue == 'minorenne') {
        prezzoNonArrotondato = prezzoUnder18 * kmPercorsiValue;
        prezzoArrotondato = prezzoNonArrotondato.toFixed(2);
        costoBiglietto.innerHTML = prezzoArrotondato + ' Euro';
        offertaBiglietto.innerHTML = 'Offerta Under18';
      }
      else if (fasciaEtaValue == 'over') {
        prezzoNonArrotondato = prezzoOver65 * kmPercorsiValue;
        prezzoArrotondato = prezzoNonArrotondato.toFixed(2);
        costoBiglietto.innerHTML = prezzoArrotondato + ' Euro';
        offertaBiglietto.innerHTML = 'Offerta Over 65';
      }
      prospetto.className = 'visible';
    }
  }
)
// Creo funzione al click del bottone annulla
annulla.addEventListener('click',
  function() {
    errore.innerHTML = '';
    nome.value = '';
    kmPercorsi.value = '';
    fasciaEta.value = 'minorenne';
    nomeBiglietto.innerHTML = '';
    offertaBiglietto.innerHTML = '';
    carrozza.innerHTML = '';
    codiceCP.innerHTML = '';
    costoBiglietto.innerHTML = '';
    prospetto.className = 'hidden';
  }
)

console.log(Math.random() * -1000);
