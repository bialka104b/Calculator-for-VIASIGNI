// ZMIENNE PRZELICZNIKI
var przelicznik_004 = 0.04;
var przelicznik_006 = 0.06;
var przelicznik_008 = 0.08;
var przelicznik_012 = 0.12;
var przelicznik_017 = 0.17;
var przelicznik_018 = 0.18;
var przelicznik_020 = 0.2;
var przelicznik_0232 = 0.232;
var przelicznik_024 = 0.24;
var przelicznik_02625 = 0.2625;
var przelicznik_032 = 0.32;
var przelicznik_0375 = 0.375;
var przelicznik_038 = 0.38;
var przelicznik_050 = 0.5;
var przelicznik_0662 = 0.662;
var przelicznik_076 = 0.76;
var przelicznik_110 = 1.1;
var przelicznik_121 = 1.21;
var przelicznik_123 = 1.23;
var przelicznik_1325 = 1.325;
var przelicznik_149 = 1.49;
var przelicznik_159 = 1.59;
var przelicznik_171 = 1.71;
var przelicznik_194 = 1.94;
var przelicznik_219 = 2.19;
var przelicznik_247 = 2.47;
var przelicznik_272 = 2.72;
var przelicznik_280 = 2.8;
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

var calcP5 = document.getElementById("p5");
var calcP6 = document.getElementById("p6");
var calcP6a = document.getElementById("p6a");
var calcP7a = document.getElementById("p7a");
var calcP7b = document.getElementById("p7b");
var calcP7c = document.getElementById("p7c");
var calcP7d = document.getElementById("p7d");
var calcP8aKrotki = document.getElementById("p8a-krotki");
var calcP8aDlugi = document.getElementById("p8a-dlugi");
var calcP8bKrotki = document.getElementById("p8b-krotki");
var calcP8bDlugi = document.getElementById("p8b-dlugi");
var calcP8c = document.getElementById("p8c");
var calcP8dKrotki = document.getElementById("p8d-krotki");
var calcP8dDlugi = document.getElementById("p8d-dlugi");
var calcP8eKrotki = document.getElementById("p8e-krotki");
var calcP8eDlugi = document.getElementById("p8e-dlugi");
var calcP8fKrotki = document.getElementById("p8f-krotki");
var calcP8fDlugi = document.getElementById("p8f-dlugi");
var calcP8gKrotki = document.getElementById("p8g-krotki");
var calcP8gDlugi = document.getElementById("p8g-dlugi");
var calcP8hKrotki = document.getElementById("p8h-krotki");
var calcP8hDlugi = document.getElementById("p8h-dlugi");
var calcP8i = document.getElementById("p8i");
var calcP9a = document.getElementById("p9a");
var calcP9b = document.getElementById("p9b");

var calcP10 = document.getElementById("p10");
var calcP11 = document.getElementById("p11");
var calcP12 = document.getElementById("p12");
var calcP13 = document.getElementById("p13");
var calcP14 = document.getElementById("p14");

var calcP15Krotki = document.getElementById("p15-krotki");
var calcP15Dlugi = document.getElementById("p15-dlugi");
var calcP16Krotki = document.getElementById("p16-krotki");
var calcP16Dlugi = document.getElementById("p16-dlugi");
var calcP17 = document.getElementById("p17");
var calcP18 = document.getElementById("p18");
var calcP19 = document.getElementById("p19");
var calcP20 = document.getElementById("p20");
var calcP20Chodnik = document.getElementById("p20-chodnik");
var calcP21a = document.getElementById("p21a");
var calcP21b = document.getElementById("p21b");

var calcP22Krotki = document.getElementById("p22-krotki");
var calcP22Dlugi = document.getElementById("p22-dlugi");
var calcP23 = document.getElementById("p23");
var calcP24 = document.getElementById("p24");
var calcP25 = document.getElementById("p25");

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

var dodajP5 = document.getElementById("dodajP5");
var dodajP6 = document.getElementById("dodajP6");
var dodajP6a = document.getElementById("dodajP6a");
var dodajP7a = document.getElementById("dodajP7a");
var dodajP7b = document.getElementById("dodajP7b");
var dodajP7c = document.getElementById("dodajP7c");
var dodajP7d = document.getElementById("dodajP7d");
var dodajP8aKrotki = document.getElementById("dodajP8a-krotki");
var dodajP8aDlugi = document.getElementById("dodajP8a-dlugi");
var dodajP8bKrotki = document.getElementById("dodajP8b-krotki");
var dodajP8bDlugi = document.getElementById("dodajP8b-dlugi");
var dodajP8c = document.getElementById("dodajP8c");
var dodajP8dKrotki = document.getElementById("dodajP8d-krotki");
var dodajP8dDlugi = document.getElementById("dodajP8d-dlugi");
var dodajP8eKrotki = document.getElementById("dodajP8e-krotki");
var dodajP8eDlugi = document.getElementById("dodajP8e-dlugi");
var dodajP8fKrotki = document.getElementById("dodajP8f-krotki");
var dodajP8fDlugi = document.getElementById("dodajP8f-dlugi");
var dodajP8gKrotki = document.getElementById("dodajP8g-krotki");
var dodajP8gDlugi = document.getElementById("dodajP8g-dlugi");
var dodajP8hKrotki = document.getElementById("dodajP8h-krotki");
var dodajP8hDlugi = document.getElementById("dodajP8h-dlugi");
var dodajP8i = document.getElementById("dodajP8i");
var dodajP9a = document.getElementById("dodajP9a");
var dodajP9b = document.getElementById("dodajP9b");

var dodajP10 = document.getElementById("dodajP10");
var dodajP11 = document.getElementById("dodajP11");
var dodajP12 = document.getElementById("dodajP12");
var dodajP13 = document.getElementById("dodajP13");
var dodajP14 = document.getElementById("dodajP14");

var dodajP15Krotki = document.getElementById("dodajP15-krotki");
var dodajP15Dlugi = document.getElementById("dodajP15-dlugi");
var dodajP16Krotki = document.getElementById("dodajP16-krotki");
var dodajP16Dlugi = document.getElementById("dodajP16-dlugi");
var dodajP17 = document.getElementById("dodajP17");
var dodajP18 = document.getElementById("dodajP18");
var dodajP19 = document.getElementById("dodajP19");
var dodajP20 = document.getElementById("dodajP20");
var dodajP20Chodnik = document.getElementById("dodajP20Chodnik");
var dodajP21a = document.getElementById("dodajP21a");
var dodajP21b = document.getElementById("dodajP21b");

var dodajP22Krotki = document.getElementById("dodajP22-krotki");
var dodajP22Dlugi = document.getElementById("dodajP22-dlugi");
var dodajP23 = document.getElementById("dodajP23");
var dodajP24 = document.getElementById("dodajP24");
var dodajP25 = document.getElementById("dodajP25");

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

calcP5.addEventListener("input", add);
calcP6.addEventListener("input", add);
calcP6a.addEventListener("input", add);
calcP7a.addEventListener("input", add);
calcP7b.addEventListener("input", add);
calcP7c.addEventListener("input", add);
calcP7d.addEventListener("input", add);
calcP8aKrotki.addEventListener("input", add);
calcP8aDlugi.addEventListener("input", add);
calcP8bKrotki.addEventListener("input", add);
calcP8bDlugi.addEventListener("input", add);
calcP8c.addEventListener("input", add);
calcP8dKrotki.addEventListener("input", add);
calcP8dDlugi.addEventListener("input", add);
calcP8eKrotki.addEventListener("input", add);
calcP8eDlugi.addEventListener("input", add);
calcP8fKrotki.addEventListener("input", add);
calcP8fDlugi.addEventListener("input", add);
calcP8gKrotki.addEventListener("input", add);
calcP8gDlugi.addEventListener("input", add);
calcP8hKrotki.addEventListener("input", add);
calcP8hDlugi.addEventListener("input", add);
calcP8i.addEventListener("input", add);
calcP9a.addEventListener("input", add);
calcP9b.addEventListener("input", add);

calcP10.addEventListener("input", add);
calcP11.addEventListener("input", add);
calcP12.addEventListener("input", add);
calcP13.addEventListener("input", add);
calcP14.addEventListener("input", add);

calcP15Krotki.addEventListener("input", add);
calcP15Dlugi.addEventListener("input", add);
calcP16Krotki.addEventListener("input", add);
calcP16Dlugi.addEventListener("input", add);
calcP17.addEventListener("input", add);
calcP18.addEventListener("input", add);
calcP19.addEventListener("input", add);
calcP20.addEventListener("input", add);
calcP20Chodnik.addEventListener("input", add);
calcP21a.addEventListener("input", add);
calcP21b.addEventListener("input", add);

calcP22Krotki.addEventListener("input", add);
calcP22Dlugi.addEventListener("input", add);
calcP23.addEventListener("input", add);
calcP24.addEventListener("input", add);
calcP25.addEventListener("input", add);
// FUNKCJA ADD
function add() {
  //TWORZYMY ZMIENNĄ KTÓRA PRZECHOWUJE WARTOŚĆ ZNAKU P-1A Z INPUT
  var p1a = Number(calcP1a.value) || 0;
  // TWORZYMY ZMIENNĄ KTÓRA WYKONUJE OBLICZENIA NA WARTOŚCI Z INPUTA ORAZ ZMIENNej PRZELICZNIK004
  var sumP1a = Number(p1a * przelicznik_004).toFixed(2);
  //WYkONUJEMy NA ZMIENNEJ METODĘ innerText KTÓRA SPOWODUJE WYŚWIETLENIE WYNIKU W POSTACI TEKSTU
  sumP1a = parseFloat(sumP1a);
  dodajP1a.innerText = "wynik: " + sumP1a;

  // P-1B
  var p1b = Number(calcP1b.value) || 0;
  var sumP1b = Number(p1b * przelicznik_004).toFixed(2);
  sumP1b = parseFloat(sumP1b);
  dodajP1b.innerText = "wynik: " + sumP1b;

  // P-1C
  var p1c = Number(calcP1c.value) || 0;
  var sumP1c = Number(p1c * przelicznik_012).toFixed(2);
  sumP1c = parseFloat(sumP1c);
  dodajP1c.innerText = "wynik: " + sumP1c;

  // P-1D
  var p1d = Number(calcP1d.value) || 0;
  var sumP1d = Number(p1d * przelicznik_006).toFixed(2);
  sumP1d = parseFloat(sumP1d);
  dodajP1d.innerText = "wynik: " + sumP1d;

  // P-1E
  var p1e = Number(calcP1e.value) || 0;
  var sumP1e = Number(p1e * przelicznik_012).toFixed(2);
  sumP1e = parseFloat(sumP1e);
  dodajP1e.innerText = "wynik: " + sumP1e;

  // P-2a
  var p2a = Number(calcP2a.value) || 0;
  var sumP2a = Number(p2a * przelicznik_012).toFixed(2);
  sumP2a = parseFloat(sumP2a);
  dodajP2a.innerText = "wynik: " + sumP2a;
  // P-2b
  var p2b = Number(calcP2b.value) || 0;
  var sumP2b = Number(p2b * przelicznik_024).toFixed(2);
  sumP2b = parseFloat(sumP2b);
  dodajP2b.innerText = "wynik: " + sumP2b;

  // P-3a
  var p3a = Number(calcP3a.value) || 0;
  var sumP3a = Number(p3a * przelicznik_020).toFixed(2);
  sumP3a = parseFloat(sumP3a);
  dodajP3a.innerText = "wynik: " + sumP3a;

  // P-3b
  var p3b = Number(calcP3b.value) || 0;
  var sumP3b = Number(p3b * przelicznik_018).toFixed(2);
  sumP3b = parseFloat(sumP3b);
  dodajP3b.innerText = "wynik: " + sumP3b;

  // P-4
  var p4 = Number(calcP4.value) || 0;
  var sumP4 = Number(p4 * przelicznik_024).toFixed(2);
  sumP4 = parseFloat(sumP4);
  dodajP4.innerText = "wynik: " + sumP4;

  //P-5
  var p5 = Number(calcP5.value) || 0;
  var sumP5 = Number(p5 * przelicznik_024).toFixed(2);
  sumP5 = parseFloat(sumP5);
  dodajP4.innerText = "wynik: " + sumP4;

  //P-6
  var p6 = Number(calcP6.value) || 0;
  var sumP6 = Number(p6 * przelicznik_024).toFixed(2);
  sumP6 = parseFloat(sumP6);
  dodajP6.innerText = "wynik: " + sumP6;

  //P-6a
  var p6a = Number(calcP6a.value) || 0;
  var sumP6a = Number(p6a * przelicznik_024).toFixed(2);
  sumP6a = parseFloat(sumP6a);
  dodajP6a.innerText = "wynik: " + sumP6a;

  //P-7a
  var p7a = Number(calcP7a.value) || 0;
  var sumP7a = Number(p7a * przelicznik_012).toFixed(2);
  sumP7a = parseFloat(sumP7a);
  dodajP7a.innerText = "wynik: " + sumP7a;

  // P-7b
  var p7b = Number(calcP7b.value) || 0;
  var sumP7b = Number(p7b * przelicznik_024).toFixed(2);
  sumP7b = parseFloat(sumP7b);
  dodajP7b.innerText = "wynik: " + sumP7b;

  // P-7c
  var p7c = Number(calcP7c.value) || 0;
  var sumP7c = Number(p7c * przelicznik_006).toFixed(2);
  sumP7c = parseFloat(sumP7c);
  dodajP7c.innerText = "wynik: " + sumP7c;

  // P-7d
  var p7d = Number(calcP7d.value) || 0;
  var sumP7d = Number(p7d * przelicznik_012).toFixed(2);
  sumP7d = parseFloat(sumP7d);
  dodajP7d.innerText = "wynik: " + sumP7d;

  //P-8a dlugi
  var p8aKrotki = Number(calcP8aKrotki.value) || 0;
  var sumP8aKrotki = Number(p8aKrotki * przelicznik_121).toFixed(2);
  sumP8aKrotki = parseFloat(sumP8aKrotki);
  dodajP8aKrotki.innerText = "wynik: " + sumP8aKrotki;
  //P-8a dlugi
  var p8aDlugi = Number(calcP8aDlugi.value) || 0;
  var sumP8aDlugi = Number(p8aDlugi * przelicznik_159).toFixed(2);
  sumP8aDlugi = parseFloat(sumP8aDlugi);
  dodajP8aDlugi.innerText = "wynik: " + sumP8aDlugi;

  // P-8b krótki
  var p8bKrotki = Number(calcP8bKrotki.value) || 0;
  var sumP8bKrotki = Number(p8bKrotki * przelicznik_149).toFixed(2);
  sumP8bKrotki = parseFloat(sumP8bKrotki);
  dodajP8bKrotki.innerText = "wynik: " + sumP8bKrotki;
  // P-8b długi
  var p8bDlugi = Number(calcP8bDlugi.value) || 0;
  var sumP8bDlugi = Number(p8bDlugi * przelicznik_194).toFixed(2);
  sumP8bDlugi = parseFloat(sumP8bDlugi);
  dodajP8bDlugi.innerText = "wynik: " + sumP8bDlugi;

  // P-8c
  var p8c = Number(calcP8c.value) || 0;
  var sumP8c = Number(p8c * przelicznik_287).toFixed(2);
  sumP8c = parseFloat(sumP8c);
  dodajP8c.innerText = "wynik: " + sumP8c;
  //P-8d krotki
  var p8dKrotki = Number(calcP8dKrotki.value) || 0;
  var sumP8dKrotki = Number(p8dKrotki * przelicznik_149).toFixed(2);
  sumP8dKrotki = parseFloat(sumP8dKrotki);
  dodajP8dKrotki.innerText = "wynik: " + sumP8dKrotki;
  //P-8d dlugi
  var p8dDlugi = Number(calcP8dDlugi.value) || 0;
  var sumP8dDlugi = Number(p8dDlugi * przelicznik_194).toFixed(2);
  sumP8dDlugi = parseFloat(sumP8dDlugi);
  dodajP8dDlugi.innerText = "wynik: " + sumP8dDlugi;

  //P-8e krotki
  var p8eKrotki = Number(calcP8eKrotki.value) || 0;
  var sumP8eKrotki = Number(p8eKrotki * przelicznik_219).toFixed(2);
  sumP8eKrotki = parseFloat(sumP8eKrotki);
  dodajP8eKrotki.innerText = "wynik: " + sumP8eKrotki;
  //P-8e dlugi
  var p8eDlugi = Number(calcP8eDlugi.value) || 0;
  var sumP8eDlugi = Number(p8eDlugi * przelicznik_272).toFixed(2);
  sumP8eDlugi = parseFloat(sumP8eDlugi);
  dodajP8eDlugi.innerText = "wynik: " + sumP8eDlugi;

  // P-8f krótki
  var p8fKrotki = Number(calcP8fKrotki.value) || 0;
  var sumP8fKrotki = Number(p8fKrotki * przelicznik_219).toFixed(2);
  sumP8fKrotki = parseFloat(sumP8fKrotki);
  dodajP8fKrotki.innerText = "wynik: " + sumP8fKrotki;
  // P-8f długi
  var p8fDlugi = Number(calcP8fDlugi.value) || 0;
  var sumP8fDlugi = Number(p8fDlugi * przelicznik_272).toFixed(2);
  sumP8fDlugi = parseFloat(sumP8fDlugi);
  dodajP8fDlugi.innerText = "wynik: " + sumP8fDlugi;

  // P-8g krótki
  var p8gKrotki = Number(calcP8gKrotki.value) || 0;
  var sumP8gKrotki = Number(p8gKrotki * przelicznik_247).toFixed(2);
  sumP8gKrotki = parseFloat(sumP8gKrotki);
  dodajP8gKrotki.innerText = "wynik: " + sumP8gKrotki;
  // P-8g długi
  var p8gDlugi = Number(calcP8gDlugi.value) || 0;
  var sumP8gDlugi = Number(p8gDlugi * przelicznik_307).toFixed(2);
  sumP8gDlugi = parseFloat(sumP8gDlugi);
  dodajP8gDlugi.innerText = "wynik: " + sumP8gDlugi;

  // P-8h krótki
  var p8hKrotki = Number(calcP8hKrotki.value) || 0;
  var sumP8hKrotki = Number(p8hKrotki * przelicznik_316).toFixed(2);
  sumP8hKrotki = parseFloat(sumP8hKrotki);
  dodajP8hKrotki.innerText = "wynik: " + sumP8hKrotki;
  // P-8h długi
  var p8hDlugi = Number(calcP8hDlugi.value) || 0;
  var sumP8hDlugi = Number(p8hDlugi * przelicznik_385).toFixed(2);
  sumP8hDlugi = parseFloat(sumP8hDlugi);
  dodajP8hDlugi.innerText = "wynik: " + sumP8hDlugi;

  // P-8i
  var p8i = Number(calcP8i.value) || 0;
  var sumP8i = Number(p8i * przelicznik_375).toFixed(2);
  sumP8i = parseFloat(sumP8i);
  dodajP8i.innerText = "wynik: " + sumP8i;

  // P-9a
  var p9a = Number(calcP9a.value) || 0;
  var sumP9a = Number(p9a * przelicznik_415).toFixed(2);
  sumP9a = parseFloat(sumP9a);
  dodajP9a.innerText = "wynik: " + sumP9a;
  // P-9b
  var p9b = Number(calcP9b.value) || 0;
  var sumP9b = Number(p9b * przelicznik_415).toFixed(2);
  sumP9b = parseFloat(sumP9b);
  dodajP9b.innerText = "wynik: " + sumP9b;

  // P-10
  var p10 = Number(calcP10.value) || 0;
  var sumP10 = Number(p10 * przelicznik_050).toFixed(2);
  sumP10 = parseFloat(sumP10);
  dodajP10.innerText = "wynik: " + sumP10;
  // P-11
  var p11 = Number(calcP11.value) || 0;
  var sumP11 = Number(p11 * przelicznik_050).toFixed(2);
  sumP11 = parseFloat(sumP11);
  dodajP11.innerText = "wynik: " + sumP11;
  // P-12
  var p12 = Number(calcP12.value) || 0;
  var sumP12 = Number(p12 * przelicznik_050).toFixed(2);
  sumP12 = parseFloat(sumP12);
  dodajP12.innerText = "wynik: " + sumP12;

  // P-13
  var p13 = Number(calcP13.value) || 0;
  var sumP13 = Number(p13 * przelicznik_02625).toFixed(4);
  sumP13 = parseFloat(sumP13);
  dodajP13.innerText = "wynik: " + sumP13;
  // P-14
  var p14 = Number(calcP14.value) || 0;
  var sumP14 = Number(p14 * przelicznik_0375).toFixed(3);
  sumP14 = parseFloat(sumP14);
  dodajP14.innerText = "wynik: " + sumP14;
  // //////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////
  // P-15 krótki
  var p15Krotki = Number(calcP15Krotki.value) || 0;
  var sumP15Krotki = Number(p15Krotki * przelicznik_1325).toFixed(3);
  sumP15Krotki = parseFloat(sumP15Krotki);
  dodajP15Krotki.innerText = "wynik: " + sumP15Krotki;
  // P-15 długi
  var p15Dlugi = Number(calcP15Dlugi.value) || 0;
  var sumP15Dlugi = Number(p15Dlugi * przelicznik_3423).toFixed(3);
  sumP15Dlugi = parseFloat(sumP15Dlugi);
  dodajP15Dlugi.innerText = "wynik: " + sumP15Dlugi;

  // P-16 krótki
  var p16Krotki = Number(calcP16Krotki.value) || 0;
  var sumP16Krotki = Number(p16Krotki * przelicznik_123).toFixed(2);
  sumP16Krotki = parseFloat(sumP16Krotki);
  dodajP16Krotki.innerText = "wynik: " + sumP16Krotki;
  // P-16 długi
  var p16Dlugi = Number(calcP16Dlugi.value) || 0;
  var sumP16Dlugi = Number(p16Dlugi * przelicznik_310).toFixed(1);
  sumP16Dlugi = parseFloat(sumP16Dlugi);
  dodajP16Dlugi.innerText = "wynik: " + sumP16Dlugi;

  // P-17
  var p17 = Number(calcP17.value) || 0;
  var sumP17 = Number(p17 * przelicznik_171).toFixed(4);
  sumP17 = parseFloat(sumP17);
  dodajP17.innerText = "wynik: " + sumP17;
  // P-18
  var p18 = Number(calcP18.value) || 0;
  var sumP18 = Number(p18 * przelicznik_012).toFixed(3);
  sumP18 = parseFloat(sumP18);
  dodajP18.innerText = "wynik: " + sumP18;
  // P-19
  var p19 = Number(calcP19.value) || 0;
  var sumP19 = Number(p19 * przelicznik_012).toFixed(4);
  sumP19 = parseFloat(sumP19);
  dodajP19.innerText = "wynik: " + sumP19;
  // P-20
  var p20 = Number(calcP20.value) || 0;
  var sumP20 = Number(p20 * przelicznik_012).toFixed(3);
  sumP20 = parseFloat(sumP20);
  dodajP20.innerText = "wynik: " + sumP20;
  // P-20Chodnik
  var p20Chodnik = Number(calcP20Chodnik.value) || 0;
  var sumP20Chodnik = Number(p20Chodnik * przelicznik_012).toFixed(4);
  sumP20Chodnik = parseFloat(sumP20Chodnik);
  dodajP20Chodnik.innerText = "wynik: " + sumP20Chodnik;
  // P-21a
  var p21a = Number(calcP21a.value) || 0;
  var sumP21a = Number(p21a * przelicznik_0375).toFixed(3);
  sumP21a = parseFloat(sumP21a);
  dodajP21a.innerText = "wynik: " + sumP21a;
  // P-21b
  var p21b = Number(calcP21b.value) || 0;
  var sumP21b = Number(p21b * przelicznik_038).toFixed(3);
  sumP21b = parseFloat(sumP21b);
  dodajP21b.innerText = "wynik: " + sumP21b;

  // P-22 krótki
  var p22Krotki = Number(calcP22Krotki.value) || 0;
  var sumP22Krotki = Number(p22Krotki * przelicznik_110).toFixed(2);
  sumP22Krotki = parseFloat(sumP22Krotki);
  dodajP22Krotki.innerText = "wynik: " + sumP22Krotki;
  // P-22 długi
  var p22Dlugi = Number(calcP22Dlugi.value) || 0;
  var sumP22Dlugi = Number(p22Dlugi * przelicznik_280).toFixed(2);
  sumP22Dlugi = parseFloat(sumP22Dlugi);
  dodajP22Dlugi.innerText = "wynik: " + sumP22Dlugi;
  // P-23
  var p23 = Number(calcP23.value) || 0;
  var sumP23 = Number(p23 * przelicznik_0662).toFixed(4);
  sumP23 = parseFloat(sumP23);
  dodajP23.innerText = "wynik: " + sumP23;
  // P-24
  var p24 = Number(calcP24.value) || 0;
  var sumP24 = Number(p24 * przelicznik_076).toFixed(3);
  sumP24 = parseFloat(sumP24);
  dodajP24.innerText = "wynik: " + sumP24;
  // P-25
  var p25 = Number(calcP25.value) || 0;
  var sumP25 = Number(p25 * przelicznik_0232).toFixed(3);
  sumP25 = parseFloat(sumP25);
  dodajP25.innerText = "wynik: " + sumP25;
  // var table_element = document.createElement("div");
  // table_element.innerHTML = "<div>" + sum1Chili4 + "</div>";
  // var parent_object = document.getElementById("testarea1");
  // parent_object.innerHTML = "";
  // parent_object.appendChild(table_element);
  var suma = (
    sumP1a +
    sumP1b +
    sumP1c +
    (sumP1d + sumP1e) +
    (sumP2a + sumP2b) +
    (sumP3a + sumP3b + sumP4) +
    (sumP5 + sumP6 + sumP6a) +
    (sumP7a + sumP7b) +
    (sumP7c + sumP7d) +
    (sumP8aKrotki + sumP8aDlugi + sumP8bKrotki + sumP8bDlugi + sumP8c) +
    (sumP8eKrotki + sumP8eDlugi + sumP8fKrotki + sumP8fDlugi + sumP8gKrotki + sumP8gDlugi) +
    (sumP8hKrotki + sumP8hDlugi + sumP8i + sumP9a + sumP9b) +
    (sumP10 + sumP11 + sumP12 + sumP13 + sumP14) +
    (sumP15Krotki + sumP15Dlugi + sumP16Krotki + sumP16Dlugi + sumP17 + sumP18) +
    (sumP19 + sumP20 + sumP20Chodnik + sumP21a + sumP21b) +
    (sumP22Krotki + sumP22Dlugi + sumP23 + sumP24 + sumP25)
  ).toFixed(4);
  suma = parseFloat(suma);
  var dodajSuma = document.getElementById("suma");
  dodajSuma.innerText = suma;

  // TA CZĘŚĆ KODU ODPOWIADA ZA WYŚWIETLANIE INFORMACJI W TEXTAREA
  //TWORZYMY TABLICE STRINGÓW UŻYWANYCH W TEXTAREA
  const char = [
    "Znak P-1a",
    "Znak P-1b",
    "Znak P-1c",
    "Znak P-1d",
    "Znak P-1e",
    "Znak P-2a",
    "Znak P-2b",
    "Znak P-3a",
    "Znak P-3b",
    "Znak P-4",
    "Znak P-5",
    "Znak P-6",
    "Znak P-6a",
    "Znak P-7a",
    "Znak P-7b",
    "Znak P-7c",
    "Znak P-7d",
    "Znak P-8a krótki",
    "Znak P-8a długi",
    "Znak P-8b krótki",
    "Znak P-8b długi",
    "Znak P-8c",
    "Znak P-8d krótki",
    "Znak P-8d długi",
    "Znak P-8e krótki",
    "Znak P-8e długi",
    "Znak P-8f krótki",
    "Znak P-8f długi",
    "Znak P-8g krórki",
    "Znak P-8g długi",
    "Znak P-8h krótki",
    "Znak P-8h długi",
    "Znak P-8i",
    "Znak P-9a",
    "Znak P-9b",
    "Znak P-10",
    "Znak P-11",
    "Znak P-12",
    "Znak P-13",
    "Znak P-14",
    "Znak P-15 krótki",
    "Znak P-15 długi",
    "Znak P-16 krótki",
    "Znak P-16 długi",
    "Znak P-17",
    "Znak P-18",
    "Znak P-19",
    "Znak P-20",
    "Znak P-20 chodnik",
    "Znak P-21a",
    "Znak P-21b",
    "Znak P-22 krótki",
    "Znak P-22 długi",
    "Znak P-23",
    "Znak P-24",
    "Znak P-25",
  ];
  if (
    sumP1a > 0 ||
    sumP1b > 0 ||
    sumP1c > 0 ||
    sumP1d > 0 ||
    sumP1e > 0 ||
    sumP2a > 0 ||
    sumP2b > 0 ||
    sumP3a > 0 ||
    sumP3b > 0 ||
    sumP4 > 0 ||
    sumP5 > 0 ||
    sumP6 > 0 ||
    sumP6a > 0 ||
    sumP7a > 0 ||
    sumP7b > 0 ||
    sumP7c > 0 ||
    sumP7d > 0 ||
    sumP8aKrotki > 0 ||
    sumP8aDlugi ||
    sumP8bKrotki > 0 ||
    sumP8bDlugi > 0 ||
    sumP8c > 0 ||
    sumP8dKrotki > 0 ||
    sumP8dDlugi > 0 ||
    sumP8eKrotki > 0 ||
    sumP8eDlugi > 0 ||
    sumP8fKrotki > 0 ||
    sumP8fDlugi > 0 ||
    sumP8gKrotki > 0 ||
    sumP8gDlugi > 0 ||
    sumP8hKrotki > 0 ||
    sumP8hDlugi > 0 ||
    sumP8i > 0 ||
    sumP9a > 0 ||
    sumP9b > 0 ||
    sumP10 > 0 ||
    sumP11 > 0 ||
    sumP12 > 0 ||
    sumP13 > 0 ||
    sumP14 > 0 ||
    sumP15Krotki > 0 ||
    sumP15Dlugi > 0 ||
    sumP16Krotki > 0 ||
    sumP16Dlugi > 0 ||
    sumP17 > 0 ||
    sumP18 > 0 ||
    sumP19 > 0 ||
    sumP20 > 0 ||
    sumP20Chodnik > 0 ||
    sumP21a > 0 ||
    sumP21b > 0 ||
    sumP22Krotki > 0 ||
    sumP22Dlugi > 0 ||
    sumP23 > 0 ||
    sumP24 > 0 ||
    sumP25 > 0
  ) {
    var parent = document.getElementById("result-text");
    parent.style.display = "block"; //POKAZUJEMY ELEMENT JEŚLI KTÓRAKOLWIEK ZMIENNA  JEST WIĘKSZA OD 0. JEŚLI UŻYTKOWNIK NIC NIE LICZY TO SIE POLE NIE POKAZUJE
    parent.textContent = ""; // CZYŚCIMY TEXT AREA, ZAPOBIEGA TO POWTARZANIU SIE TYCH SAMYCH LINIJEK TEKSTU
    if (sumP1a > 0) {
      parent.textContent = parent.textContent + char[0] + " - " + sumP1a + "m²" + "\n";
    }
    if (sumP1b > 0) {
      parent.textContent = parent.textContent + char[1] + " - " + sumP1b + "m²" + "\n";
    }
    if (sumP1c > 0) {
      parent.textContent = parent.textContent + char[2] + " - " + sumP1c + "m²" + "\n";
    }
    if (sumP1d > 0) {
      parent.textContent = parent.textContent + char[3] + " - " + sumP1d + "m²" + "\n";
    }
    if (sumP1e > 0) {
      parent.textContent = parent.textContent + char[3] + " - " + sumP1e + "m²" + "\n";
    }
    if (sumP2a > 0) {
      parent.textContent = parent.textContent + char[5] + " - " + sumP2a + "m²" + "\n";
    }
    if (sumP2b > 0) {
      parent.textContent = parent.textContent + char[6] + " - " + sumP2b + "m²" + "\n";
    }
    if (sumP3a > 0) {
      parent.textContent = parent.textContent + char[7] + " - " + sumP3a + "m²" + "\n";
    }
    if (sumP3b > 0) {
      parent.textContent = parent.textContent + char[8] + " - " + sumP3b + "m²" + "\n";
    }
    if (sumP4 > 0) {
      parent.textContent = parent.textContent + char[9] + " - " + sumP4 + "m²" + "\n";
    }
    if (sumP5 > 0) {
      parent.textContent = parent.textContent + char[10] + " - " + sumP5 + "m²" + "\n";
    }
    if (sumP6 > 0) {
      parent.textContent = parent.textContent + char[11] + " - " + sumP6 + "m²" + "\n";
    }
    if (sumP6a > 0) {
      parent.textContent = parent.textContent + char[12] + " - " + sumP6a + "m²" + "\n";
    }
    if (sumP7a > 0) {
      parent.textContent = parent.textContent + char[13] + " - " + sumP7a + "m²" + "\n";
    }
    if (sumP7b > 0) {
      parent.textContent = parent.textContent + char[14] + " - " + sumP7b + "m²" + "\n";
    }
    if (sumP7c > 0) {
      parent.textContent = parent.textContent + char[15] + " - " + sumP7c + "m²" + "\n";
    }
    if (sumP7d > 0) {
      parent.textContent = parent.textContent + char[16] + " - " + sumP7d + "m²" + "\n";
    }
    if (sumP8aKrotki > 0) {
      parent.textContent = parent.textContent + char[17] + " - " + sumP8aKrotki + "m²" + "\n";
    }
    if (sumP8aDlugi > 0) {
      parent.textContent = parent.textContent + char[18] + " - " + sumP8aDlugi + "m²" + "\n";
    }
    if (sumP8bKrotki > 0) {
      parent.textContent = parent.textContent + char[19] + " - " + sumP8bKrotki + "m²" + "\n";
    }
    if (sumP8bDlugi > 0) {
      parent.textContent = parent.textContent + char[20] + " - " + sumP8bDlugi + "m²" + "\n";
    }
    if (sumP8c > 0) {
      parent.textContent = parent.textContent + char[21] + " - " + sumP8c + "m²" + "\n";
    }
    // TU BEDZIE JESZCZE 8D krótki i długi
    if (sumP8dKrotki > 0) {
      parent.textContent = parent.textContent + char[22] + " - " + sumP8dKrotki + "m²" + "\n";
    }
    if (sumP8dDlugi > 0) {
      parent.textContent = parent.textContent + char[23] + " - " + sumP8dDlugi + "m²" + "\n";
    }
    if (sumP8eKrotki > 0) {
      parent.textContent = parent.textContent + char[24] + " - " + sumP8eKrotki + "m²" + "\n";
    }
    if (sumP8eDlugi > 0) {
      parent.textContent = parent.textContent + char[25] + " - " + sumP8eDlugi + "m²" + "\n";
    }
    if (sumP8fKrotki > 0) {
      parent.textContent = parent.textContent + char[26] + " - " + sumP8fKrotki + "m²" + "\n";
    }
    if (sumP8fDlugi > 0) {
      parent.textContent = parent.textContent + char[27] + " - " + sumP8fDlugi + "m²" + "\n";
    }
    if (sumP8gKrotki > 0) {
      parent.textContent = parent.textContent + char[28] + " - " + sumP8gKrotki + "m²" + "\n";
    }
    if (sumP8gDlugi > 0) {
      parent.textContent = parent.textContent + char[29] + " - " + sumP8gDlugi + "m²" + "\n";
    }
    if (sumP8hKrotki > 0) {
      parent.textContent = parent.textContent + char[30] + " - " + sumP8hKrotki + "m²" + "\n";
    }
    if (sumP8hDlugi > 0) {
      parent.textContent = parent.textContent + char[31] + " - " + sumP8hDlugi + "m²" + "\n";
    }
    if (sumP8i > 0) {
      parent.textContent = parent.textContent + char[32] + " - " + sumP8i + "m²" + "\n";
    }
    if (sumP9a > 0) {
      parent.textContent = parent.textContent + char[33] + " - " + sumP9a + "m²" + "\n";
    }
    if (sumP9b > 0) {
      parent.textContent = parent.textContent + char[34] + " - " + sumP9b + "m²" + "\n";
    }
    if (sumP10 > 0) {
      parent.textContent = parent.textContent + char[35] + " - " + sumP10 + "m²" + "\n";
    }
    if (sumP11 > 0) {
      parent.textContent = parent.textContent + char[36] + " - " + sumP11 + "m²" + "\n";
    }
    if (sumP12 > 0) {
      parent.textContent = parent.textContent + char[37] + " - " + sumP12 + "m²" + "\n";
    }
    if (sumP13 > 0) {
      parent.textContent = parent.textContent + char[38] + " - " + sumP13 + "m²" + "\n";
    }
    if (sumP14 > 0) {
      parent.textContent = parent.textContent + char[39] + " - " + sumP14 + "m²" + "\n";
    }
    if (sumP15Krotki > 0) {
      parent.textContent = parent.textContent + char[40] + " - " + sumP15Krotki + "m²" + "\n";
    }
    if (sumP15Dlugi > 0) {
      parent.textContent = parent.textContent + char[41] + " - " + sumP15Dlugi + "m²" + "\n";
    }
    if (sumP16Krotki > 0) {
      parent.textContent = parent.textContent + char[42] + " - " + sumP16Krotki + "m²" + "\n";
    }
    if (sumP16Dlugi > 0) {
      parent.textContent = parent.textContent + char[43] + " - " + sumP16Dlugi + "m²" + "\n";
    }
    if (sumP17 > 0) {
      parent.textContent = parent.textContent + char[44] + " - " + sumP17 + "m²" + "\n";
    }
    if (sumP18 > 0) {
      parent.textContent = parent.textContent + char[45] + " - " + sumP18 + "m²" + "\n";
    }
    if (sumP19 > 0) {
      parent.textContent = parent.textContent + char[46] + " - " + sumP19 + "m²" + "\n";
    }
    if (sumP20 > 0) {
      parent.textContent = parent.textContent + char[47] + " - " + sumP20 + "m²" + "\n";
    }
    if (sumP20Chodnik > 0) {
      parent.textContent = parent.textContent + char[48] + " - " + sumP20Chodnik + "m²" + "\n";
    }
    if (sumP21a > 0) {
      parent.textContent = parent.textContent + char[49] + " - " + sumP21a + "m²" + "\n";
    }
    if (sumP21b > 0) {
      parent.textContent = parent.textContent + char[50] + " - " + sumP21b + "m²" + "\n";
    }
    if (sumP22Krotki > 0) {
      parent.textContent = parent.textContent + char[51] + " - " + sumP22Krotki + "m²" + "\n";
    }
    if (sumP22Dlugi > 0) {
      parent.textContent = parent.textContent + char[52] + " - " + sumP22Dlugi + "m²" + "\n";
    }
    if (sumP23 > 0) {
      parent.textContent = parent.textContent + char[53] + " - " + sumP23 + "m²" + "\n";
    }
    if (sumP24 > 0) {
      parent.textContent = parent.textContent + char[54] + " - " + sumP24 + "m²" + "\n";
    }
    if (sumP25 > 0) {
      parent.textContent = parent.textContent + char[55] + " - " + sumP25 + "m²" + "\n";
    }
    parent.textContent = parent.textContent + "suma" + " = " + suma + "m²";
  } else {
    var parent = document.getElementById("result-text");
    parent.style.display = "none";
    parent.textContent = "";
  }
}
