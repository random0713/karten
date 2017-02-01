var geld = document.getElementById("geld").value;


function spielStarten() {
	if (isNan(geld)) {
		alert("Das ist kein gültiges Zifferformat! Bitte nur Ziffern eingeben!");

	} else {
		permutation();
	}
}

var feld = document.getElementsByClass("li");

function koenigsFeld() {
	for (var index = 3; index >= 0; index--) {
		var temp, index2;
		var result = feld[index];
		index2 = Math.round(Math.random() * index);
		temp = feld[index2];
		feld[index2] = result;
		result = temp;
	}
	return result;
}

function koeniginsFeld() {
	for (var index = 7; index >= 4; index--) {
		var temp, index2;
		var result = feld[index];
		index2 = Math.round(Math.random() * index);
		temp = feld[index2];
		feld[index2] = result;
		result = temp;
	}
	return result;
}

function bubeFeld() {
	for (var index = 11; index >= 8; index--) {
		var temp, index2;
		var result = feld[index];
		index2 = Math.round(Math.random() * index);
		temp = feld[index2];
		feld[index2] = result;
		result = temp;
	}
	return result;
}

function permutation() {
	var neuerKoenig = document.getElementById("koenig");
	var neueKoenigin = document.getElementById("koenigin");
	var neuerBube = document.getElementById("bube");
	
	var koenigJetzt = neuerKoenig.value;
    var koeniginJetzt = neueKoenigin.value;	
	var bubeJetzt = neuerBube.value; 
	
	koenigJetzt = koenigFeld();
	koeniginJetzt = koeniginsFeld();
	bubeJetzt = bubeFeld();
	
	var bedingungKartenUndFarbe = koenigJetzt.name == koeniginJetzt.name = bubeJetzt.name;
	var bedingungNurFarbe1 = koenigJetzt.value == koeniginJetzt.value == bubeJetzt.value;
	var bedingungNurFarbe2 = koenigJetzt.name != koeniginJetzt.name != bubeJetzt.name;
	var bedingungsNurFarbe3 = koenigJetzt.name == koeniginJetzt.name &&koenigJetzt.name != bubeJetzt.name;
	var bedingungsNurFarbe4 = koenigJetzt.name == bubeJetzt.name && koenigJetzt != koeniginJetzt;
	
	if (bedingungKartenUndFarbe) {
		document.getElementById("ergebnisse").innerHTML = "Gewonnen! Sie erhalten " + geld * 2 + " Euros!";
	} else if (bedingungNurFarbe1 && ( bedingungNurFarbe2 || bedingungsNurFarbe3 || bedingungsNurFarbe4 ) ) {
		document.getElementBId("ergebnisse").innerHTML = "Sie bekommen Ihr Geld zurück!";
	} else {
		document.getElementById("ergebnisse").innerHTML = "Sie haben verloren!";
	}
	}


