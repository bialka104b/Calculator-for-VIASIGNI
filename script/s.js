const przelicznik004 = 0.04;

// POBIERAMY ELEMENTY INPUT Z HTML
let calcP1a = document.getElementById("p1a");

//POBIERAMY ELEMENTY GDZIE BĘDZIE WYŚWIETLANY WYNIK
let dodajP1a = document.getElementById("dodajP1a");



function ccc(przelicznik004, calcP1a, dodajP1a) {
    //TWORZYMY ZMIENNĄ KTÓRA PRZECHOWUJE WARTOŚĆ ZNAKU P-1A Z INPUT
    let p_znak = Number(calcP1a.value) || 0;
    // TWORZYMY ZMIENNĄ KTÓRA WYKONUJE OBLICZENIA NA WARTOŚCI Z INPUTA ORAZ ZMIENNej PRZELICZNIK004
    let sum = Number(p_znak * przelicznik004).toFixed(2);
    //WYkONUJEMy NA ZMIENNEJ METODĘ innerText KTÓRA SPOWODUJE WYŚWIETLENIE WYNIKU W POSTACI TEKSTU
    sum = parseFloat(sum);
    dodajP1a.innerText = "wynik: " + sum;
    
    let suma = (sum).toFixed(4);
    suma = parseFloat(suma);
    let dodajSuma = document.getElementById("suma");
    dodajSuma.innerText = suma;

    const char = ["Znak P-1a"];
      if (sum > 0) {
        var parent = document.getElementById("result-text");
        parent.style.display = "block"; //POKAZUJEMY ELEMENT JEŚLI KTÓRAKOLWIEK ZMIENNA  JEST WIĘKSZA OD 0. JEŚLI UŻYTKOWNIK NIC NIE LICZY TO SIE POLE NIE POKAZUJE
        parent.textContent = ""; // CZYŚCIMY TEXT AREA, ZAPOBIEGA TO POWTARZANIU SIE TYCH SAMYCH LINIJEK TEKSTU
        if (sum > 0) {
          parent.textContent = parent.textContent + char[0] + " - " + sum + "m²" + "\n";
        }
    } else {
        var parent = document.getElementById("result-text");
        parent.style.display = "none";
        parent.textContent = "";
    }


    //TWORZYMY ZMIENNĄ KTÓRA PRZECHOWUJE WARTOŚĆ ZNAKU P-1A Z INPUT
    // var p1a = Number(calcP1a.value) || 0;
    // // TWORZYMY ZMIENNĄ KTÓRA WYKONUJE OBLICZENIA NA WARTOŚCI Z INPUTA ORAZ ZMIENNej PRZELICZNIK004
    // var sumP1a = Number(p1a * przelicznik_004).toFixed(2);
    // //WYkONUJEMy NA ZMIENNEJ METODĘ innerText KTÓRA SPOWODUJE WYŚWIETLENIE WYNIKU W POSTACI TEKSTU
    // sumP1a = parseFloat(sumP1a);
    // dodajP1a.innerText = "wynik: " + sumP1a;

    // var suma = (sumP1a).toFixed(4);
    // suma = parseFloat(suma);
    // var dodajSuma = document.getElementById("suma");
    // dodajSuma.innerText = suma;

    //   const char = ["Znak P-1a"];
    //   if (sumP1a > 0) {
    //     var parent = document.getElementById("result-text");
    //     parent.style.display = "block"; //POKAZUJEMY ELEMENT JEŚLI KTÓRAKOLWIEK ZMIENNA  JEST WIĘKSZA OD 0. JEŚLI UŻYTKOWNIK NIC NIE LICZY TO SIE POLE NIE POKAZUJE
    //     parent.textContent = ""; // CZYŚCIMY TEXT AREA, ZAPOBIEGA TO POWTARZANIU SIE TYCH SAMYCH LINIJEK TEKSTU
    //     if (sumP1a > 0) {
    //       parent.textContent = parent.textContent + char[0] + " - " + sumP1a + "m²" + "\n";
    //     }
    // } else {
    //     var parent = document.getElementById("result-text");
    //     parent.style.display = "none";
    //     parent.textContent = "";
    // }
    
}
calcP1a.addEventListener("input", ccc(przelicznik004, calcP1a, dodajP1a));

// document.addEventListener("DOMContentLoaded", (przelicznik, calcP1a, dodajP1a) => {

//     //TWORZYMY ZMIENNĄ KTÓRA PRZECHOWUJE WARTOŚĆ ZNAKU P-1A Z INPUT
//     let p_znak = Number(calcP1a.value) || 0;
//     // TWORZYMY ZMIENNĄ KTÓRA WYKONUJE OBLICZENIA NA WARTOŚCI Z INPUTA ORAZ ZMIENNej PRZELICZNIK004
//     let sum = Number(p_znak * przelicznik).toFixed(2);
//     //WYkONUJEMy NA ZMIENNEJ METODĘ innerText KTÓRA SPOWODUJE WYŚWIETLENIE WYNIKU W POSTACI TEKSTU
//     sum = parseFloat(sum);
//     dodajP1a.innerText = "wynik: " + sum;
    
//     let suma = (sum).toFixed(4);
//     suma = parseFloat(suma);
//     let dodajSuma = document.getElementById("suma");
//     dodajSuma.innerText = suma;

//     const char = ["Znak P-1a"];
//       if (sum > 0) {
//         var parent = document.getElementById("result-text");
//         parent.style.display = "block"; //POKAZUJEMY ELEMENT JEŚLI KTÓRAKOLWIEK ZMIENNA  JEST WIĘKSZA OD 0. JEŚLI UŻYTKOWNIK NIC NIE LICZY TO SIE POLE NIE POKAZUJE
//         parent.textContent = ""; // CZYŚCIMY TEXT AREA, ZAPOBIEGA TO POWTARZANIU SIE TYCH SAMYCH LINIJEK TEKSTU
//         if (sum > 0) {
//           parent.textContent = parent.textContent + char[0] + " - " + sum + "m²" + "\n";
//         }
//     } else {
//         var parent = document.getElementById("result-text");
//         parent.style.display = "none";
//         parent.textContent = "";
//     }

// });