var km_percorsi = prompt('Distanza(Km):');
var eta = prompt('Età:');
var prezzo_tot;

var prezzo_base = km_percorsi * 0.21;

if( isNaN(km_percorsi) || isNaN(eta) ){
    document.getElementById('prezzo').innerHTML = '!!!inserisci valori numerici!!!';
}
else if(eta<18){
        var prezzo_tot =  prezzo_base * 0.80; /*20% di sconto*/
    }
    else if(eta>65){
        var prezzo_tot =  prezzo_base * 0.60; /*40% di sconto*/
    }
    else{
        var prezzo_tot = prezzo_base;
    }

var prezzo_tot = prezzo_tot.toFixed(2); /* usiamo toFixed(2) per isolare solo le prime due cifre dopo la virgola (non ho utilizzato floor in quanto mi approssimava tutto per difetto omettendo i centesimi)*/

document.getElementById('prezzo').innerHTML = prezzo_tot + '€';
