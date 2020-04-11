// ZMIENNE PRZELICZNIKI
var przelicznik_004 = 0.04;
var przelicznik_005 = 0.05;
var przelicznik_006 = 0.06;
var przelicznik_008 = 0.08;
var przelicznik_012 = 0.12;
var przelicznik_017 = 0.17;
var przelicznik_018 = 0.18;
var przelicznik_020 = 0.2;
var przelicznik_024 = 0.24;
var przelicznik_02625 = 0.2625;
var przelicznik_032 = 0.32;
var przelicznik_0375 = 0.375;
var przelicznik_038 = 0.38;
var przelicznik_121 = 1.21;
var przelicznik_123 = 1.23;
var przelicznik_1325 = 1.325;
var przelicznik_149 = 1.49;
var przelicznik_159 = 1.59;
var przelicznik_194 = 1.94;
var przelicznik_219 = 2.19;
var przelicznik_247 = 2.47;
var przelicznik_272 = 2.72;
var przelicznik_287 = 2.87;
var przelicznik_307 = 3.07;
var przelicznik_310 = 3.1;
var przelicznik_316 = 3.16;
var przelicznik_3423 = 3.423;
var przelicznik_375 = 3.75;
var przelicznik_385 = 3.85;
var przelicznik_415 = 4.15;

// POBIERAMY ELEMENTY INPUT Z HTML
var calcP1a = document.getElementById("p1a");
var calcP1b = document.getElementById("p1b");
var calcP1c = document.getElementById("p1c");
var calcP1d = document.getElementById("p1d");
var calcP1e = document.getElementById("p1e");
var calcP2a = document.getElementById("p2a");
var calcP2b = document.getElementById("p2b");
var calcP3a = document.getElementById("p3a");
var calcP3b = document.getElementById("p3b");
var calcP4 = document.getElementById("p4");

//POBIERAMY ELEMENTY GDZIE BĘDZIE WYŚWIETLANY WYNIK
var dodajP1a = document.getElementById("dodajP1a");
var dodajP1b = document.getElementById("dodajP1b");
var dodajP1c = document.getElementById("dodajP1c");
var dodajP1d = document.getElementById("dodajP1d");
var dodajP1e = document.getElementById("dodajP1e");
var dodajP2a = document.getElementById("dodajP2a");
var dodajP2b = document.getElementById("dodajP2b");
var dodajP3a = document.getElementById("dodajP3a");
var dodajP3b = document.getElementById("dodajP3b");
var dodajP4 = document.getElementById("dodajP4");

// WYKONUJEMY NA POPRANYCH ELEMENTACH INPUT EVENTLISTENER z funkcją add
calcP1a.addEventListener("input", add);
calcP1b.addEventListener("input", add);
calcP1c.addEventListener("input", add);
calcP1d.addEventListener("input", add);
calcP1e.addEventListener("input", add);
calcP2a.addEventListener("input", add);
calcP2b.addEventListener("input", add);
calcP3a.addEventListener("input", add);
calcP3b.addEventListener("input", add);
calcP4.addEventListener("input", add);

// FUNKCJA ADD
function add() {
  //TWORZYMY ZMIENNĄ KTÓRA PRZECHOWUJE WARTOŚĆ ZNAKU P-1A Z INPUT
  var p1a = Number(calcP1a.value) || 0;
  // TWORZYMY ZMIENNĄ KTÓRA WYKONUJE OBLICZENIA NA WARTOŚCI Z INPUTA ORAZ ZMIENNej PRZELICZNIK004
  var sumP1a = Number(p1a * przelicznik_004).toFixed(2);
  //WYkONUJEMy NA ZMIENNEJ METODĘ innerText KTÓRA SPOWODUJE WYŚWIETLENIE WYNIKU W POSTACI TEKSTU
  dodajP1a.innerText = "wynik: " + sumP1a;

  // P-1B
  var p1b = Number(calcP1b.value) || 0;
  var sumP1b = Number(p1b * przelicznik_004).toFixed(2);
  dodajP1b.innerText = "wynik: " + sumP1b;

  // P-1C
  var p1c = Number(calcP1c.value) || 0;
  var sumP1c = Number(p1c * przelicznik_012).toFixed(2);
  dodajP1c.innerText = "wynik: " + sumP1c;

  // P-1D
  var p1d = Number(calcP1d.value) || 0;
  var sumP1d = Number(p1d * przelicznik_006).toFixed(2);
  dodajP1d.innerText = "wynik: " + sumP1d;

  // P-1E
  var p1e = Number(calcP1e.value) || 0;
  var sumP1e = Number(p1e * przelicznik_012).toFixed(2);
  dodajP1e.innerText = "wynik: " + sumP1e;

  // P-2a
  var p2a = Number(calcP2a.value) || 0;
  var sumP2a = Number(p2a * przelicznik_012).toFixed(2);
  dodajP2a.innerText = "wynik: " + sumP2a;
  // P-2b
  var p2b = Number(calcP2b.value) || 0;
  var sumP2b = Number(p2b * przelicznik_024).toFixed(2);
  dodajP2b.innerText = "wynik: " + sumP2b;

  // P-3a
  var p3a = Number(calcP3a.value) || 0;
  var sumP3a = Number(p3a * przelicznik_020).toFixed(2);
  dodajP3a.innerText = "wynik: " + sumP3a;

  // P-3b
  var p3b = Number(calcP3b.value) || 0;
  var sumP3b = Number(p3b * przelicznik_018).toFixed(2);
  dodajP3b.innerText = "wynik: " + sumP3b;

  // P-4
  var p4 = Number(calcP4.value) || 0;
  var sumP4 = Number(p4 * przelicznik_024).toFixed(2);
  dodajP4.innerText = "wynik: " + sumP4;

  // var table_element = document.createElement("div");
  // table_element.innerHTML = "<div>" + sum1Chili4 + "</div>";
  // var parent_object = document.getElementById("testarea1");
  // parent_object.innerHTML = "";
  // parent_object.appendChild(table_element);
}
