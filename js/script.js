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

// Creo funzione al click del bottone Genera
genera.addEventListener('click',
  function() {
    nomeValue = nome.value;
    kmPercorsiValue = kmPercorsi.value;
    fasciaEtaValue = fasciaEta.value;

    nomeBiglietto.innerHTML = nomeValue;
    offertaBiglietto.innerHTML = 'Offerta Standard';
    carrozza.innerHTML = Math.floor(Math.random()*10);
    codiceCP.innerHTML = Math.floor(Math.random()*10000);
    costoBiglietto.innerHTML = prezzo * kmPercorsiValue + ' Euro';
    if ( fasciaEtaValue == 'minorenne') {
      costoBiglietto.innerHTML = prezzoUnder18 * kmPercorsiValue + ' Euro';
    }
    else if (fasciaEtaValue == 'over') {
      costoBiglietto.innerHTML = prezzoOver65 * kmPercorsiValue + ' Euro';
    }
  }
)
