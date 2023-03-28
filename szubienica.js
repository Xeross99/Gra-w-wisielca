var haslo = "bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_zle = 0;

var yes = new Audio("yes.wav")
var no = new Audio("no.wav")
var win = new Audio("win.mp3")
var lose = new Audio("lose.mp3")

var haslo1 = "";

for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == " ") {
        haslo1 = haslo1 + " ";
    }
    else {
        haslo1 = haslo1 + "-";
    }
}

function wypisz_haslo() {
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];

function start() {
    var tresc_diva = "";
    for (i = 0; i <= 34; i++) {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;



    wypisz_haslo();
}

String.prototype.ustawZnak = function (miejsce, znak) {
    if (miejsce > this.length - 1) {
        return this.toString();
    }
    else {
        return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
    }
}

function sprawdz(nr) {

    var trafiona = false;

    for (i = 0; i < dlugosc; i++) {
        if (haslo.charAt(i) == litery[nr]) {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }
    if (trafiona == true) {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";


        wypisz_haslo();
    }
    else {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");
        ile_zle++;
        var obraz = "./img/s" + ile_zle + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '"alt="" />';
    }
    //sprawdzanie wygranej
    if (haslo == haslo1) {
        win.play();
        document.getElementById("alfabet").innerHTML = "BRAWO! udało Ci się rozwiązać zagadkę" + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }
    if (ile_zle >= 9) {
        lose.play();
        document.getElementById("alfabet").innerHTML = "Przegrana! prawidłowe hasło: " + haslo + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }
}