let vueSet = new Vue({
  el: '#app',
  data: {
      przelicznik_004: 0.04,     przelicznik_006: 0.06,
      przelicznik_008: 0.08,     przelicznik_012: 0.12,
      przelicznik_017: 0.17,     przelicznik_018: 0.18,
      przelicznik_020: 0.2,      przelicznik_0232: 0.232,
      przelicznik_024: 0.24,     przelicznik_02625: 0.2625,
      przelicznik_032: 0.32,     przelicznik_0375: 0.375,
      przelicznik_038: 0.38,     przelicznik_050: 0.5,
      przelicznik_0662: 0.662,   przelicznik_076: 0.76,
      przelicznik_110: 1.1,      przelicznik_121: 1.21,
      przelicznik_123: 1.23,     przelicznik_1325: 1.325,
      przelicznik_149: 1.49,     przelicznik_159: 1.59,
      przelicznik_171: 1.71,     przelicznik_194: 1.94,
      przelicznik_219: 2.19,     przelicznik_247: 2.47,
      przelicznik_272: 2.72,     przelicznik_280: 2.8,
      przelicznik_287: 2.87,     przelicznik_307: 3.07,
      przelicznik_310: 3.1,      przelicznik_316: 3.16,
      przelicznik_3423: 3.423,   przelicznik_375: 3.75,
      przelicznik_385: 3.85,     przelicznik_415: 4.15,
      wynik1: 0,     wynik2: 0,  wynik3: 0,     wynik4: 0,
      wynik5: 0,     wynik6: 0,  wynik7: 0,     wynik8: 0,
      wynik9: 0,     wynik10: 0, wynik11: 0,    wynik12: 0,
      wynik13: 0,    wynik14: 0, wynik15: 0,    wynik16: 0,
      wynik17: 0,    wynik18: 0, wynik19: 0,    wynik20: 0,
      wynik21: 0,    wynik22: 0, wynik23: 0,    wynik24: 0,
      wynik25: 0,    wynik26: 0, wynik27: 0,    wynik28: 0,
      wynik29: 0,    wynik30: 0, wynik31: 0,    wynik32: 0,
      wynik33: 0,    wynik34: 0, wynik35: 0,    wynik36: 0,
      wynik37: 0,    wynik38: 0, wynik39: 0,    wynik40: 0,
      wynik41: 0,    wynik42: 0, wynik43: 0,    wynik44: 0,
      wynik45: 0,    wynik46: 0, wynik47: 0,    wynik48: 0,
      wynik49: 0,    wynik50: 0, wynik51: 0,    wynik52: 0,
      wynik53: 0,    wynik54: 0, wynik55: 0,    wynik56: 0,

      char: [
        "Znak P-1a",        "Znak P-1b",        "Znak P-1c",        "Znak P-1d",
        "Znak P-1e",        "Znak P-2a",        "Znak P-2b",        "Znak P-3a",
        "Znak P-3b",        "Znak P-4",         "Znak P-5",         "Znak P-6",
        "Znak P-6a",        "Znak P-7a",        "Znak P-7b",        "Znak P-7c",
        "Znak P-7d",        "Znak P-8a krótki", "Znak P-8a długi",  "Znak P-8b krótki",
        "Znak P-8b długi",  "Znak P-8c",        "Znak P-8d krótki", "Znak P-8d długi",
        "Znak P-8e krótki", "Znak P-8e długi",  "Znak P-8f krótki", "Znak P-8f długi",
        "Znak P-8g krórki", "Znak P-8g długi",  "Znak P-8h krótki", "Znak P-8h długi",
        "Znak P-8i",        "Znak P-9a",        "Znak P-9b",        "Znak P-10",
        "Znak P-11",        "Znak P-12",        "Znak P-13",        "Znak P-14",
        "Znak P-15 krótki", "Znak P-15 długi",  "Znak P-16 krótki", "Znak P-16 długi",
        "Znak P-17",        "Znak P-18",        "Znak P-19",        "Znak P-20",
        "Znak P-20 chodnik","Znak P-21a",       "Znak P-21b",       "Znak P-22 krótki",
        "Znak P-22 długi",  "Znak P-23",        "Znak P-24",        "Znak P-25"],
        join: "",
  },
  methods: {
      //WYDZIELONA METODA DO PONIERANIA WARTOŚCI ELEMENTU Z PODANYM ID
      getIdTextArea(string){
        const x = document.getElementById(string);
        return x;
      },
      getId(string){
          const x = document.getElementById(string).value;
          return x;
      },

      
      //WYDZIELONA METODA DO MNOŻENIA RAZY 0,04
      p004(string){
          return (this.getId(string) * this.przelicznik_004).toFixed(2);
      },
      p006(string){
          return (this.getId(string) * this.przelicznik_006).toFixed(2);
      },
      p008(string){
          return (this.getId(string) * this.przelicznik_008).toFixed(2);
      },
      p012(string){
          return (this.getId(string) * this.przelicznik_012).toFixed(2);
      },
      p017(string){
          return (this.getId(string) * this.przelicznik_017).toFixed(2);
      },
      p018(string){
          return (this.getId(string) * this.przelicznik_018).toFixed(2);
      },
      p020(string){
          return (this.getId(string) * this.przelicznik_020).toFixed(2);
      },
      p0232(string){
          return (this.getId(string) * this.przelicznik_0232).toFixed(2);
      },
      p024(string){
          return (this.getId(string) * this.przelicznik_024).toFixed(2);
      },
      p02625(string){
          return (this.getId(string) * this.przelicznik_02625).toFixed(2);
      },
      p032(string){
          return (this.getId(string) * this.przelicznik_032).toFixed(2);
      },
      p0375(string){
          return (this.getId(string) * this.przelicznik_0375).toFixed(2);
      },
      p038(string){
          return (this.getId(string) * this.przelicznik_038).toFixed(2);
      },
      p050(string){
          return (this.getId(string) * this.przelicznik_050).toFixed(2);
      },
      p0662(string){
          return (this.getId(string) * this.przelicznik_0662).toFixed(2);
      },
      p076(string){
          return (this.getId(string) * this.przelicznik_076).toFixed(2);
      },
      p110(string){
          return (this.getId(string) * this.przelicznik_110).toFixed(2);
      },
      p121(string){
          return (this.getId(string) * this.przelicznik_121).toFixed(2);
      },
      p123(string){
          return (this.getId(string) * this.przelicznik_123).toFixed(2);
      },
      p1325(string){
          return (this.getId(string) * this.przelicznik_1325).toFixed(2);
      },
      p149(string){
          return (this.getId(string) * this.przelicznik_149).toFixed(2);
      },
      p159(string){
          return (this.getId(string) * this.przelicznik_159).toFixed(2);
      },
      p171(string){
          return (this.getId(string) * this.przelicznik_171).toFixed(2);
      },
      p194(string){
          return (this.getId(string) * this.przelicznik_194).toFixed(2);
      },
      p219(string){
          return (this.getId(string) * this.przelicznik_219).toFixed(2);
      },
      p247(string){
          return (this.getId(string) * this.przelicznik_247).toFixed(2);
      },
      p272(string){
          return (this.getId(string) * this.przelicznik_272).toFixed(2);
      },
      p280(string){
          return (this.getId(string) * this.przelicznik_280).toFixed(2);
      },
      p287(string){
          return (this.getId(string) * this.przelicznik_287).toFixed(2);
      },
      p307(string){
          return (this.getId(string) * this.przelicznik_307).toFixed(2);
      },
      p310(string){
          return (this.getId(string) * this.przelicznik_310).toFixed(2);
      },
      p316(string){
          return (this.getId(string) * this.przelicznik_316).toFixed(2);
      },
      p3423(string){
          return (this.getId(string) * this.przelicznik_3423).toFixed(2);
      },
      p375(string){
          return (this.getId(string) * this.przelicznik_375).toFixed(2);
      },
      p385(string){
          return (this.getId(string) * this.przelicznik_385).toFixed(2);
      },
      p415(string){
          return (this.getId(string) * this.przelicznik_415).toFixed(2);
      },
      //metody do renderowania wartości do drzewa dom
      calc1() {
          this.wynik1 = parseFloat(this.p004("p1a"));
          return this.wynik1;
      },
      calc2() {
          this.wynik2 = parseFloat(this.p004("p1b"));
          return this.wynik2;
      },
      calc3() {
          this.wynik3 = parseFloat(this.p012("p1c"));
          return this.wynik3;
      },
      calc4() {
          this.wynik4 = parseFloat(this.p006("p1d"));
          return this.wynik4;
      },
      calc5() {
          this.wynik5 = parseFloat(this.p012("p1e"));
          return this.wynik5;
      },
      calc6() {
          this.wynik6 = parseFloat(this.p012("p2a"));
          return this.wynik6;
      },
      calc7() {
          this.wynik7 = parseFloat(this.p024("p2b"));
          return this.wynik7;
      },
      calc8() {
          this.wynik8 = parseFloat(this.p020("p3a"));
          return this.wynik8;
      },
      calc9() {
          this.wynik9 = parseFloat(this.p018("p3b"));
          return this.wynik9;
      },
      calc10() {
          this.wynik10 = parseFloat(this.p024("p4"));
          return this.wynik10;
      },
      calc11() {
          this.wynik11 = parseFloat(this.p032("p5"));
          return this.wynik11;
      },
      calc12() {
          this.wynik12 = parseFloat(this.p008("p6"));
          return this.wynik12;
      },
      calc13() {
          this.wynik13 = parseFloat(this.p017("p6a"));
          return this.wynik13;
      },
      calc14() {
          this.wynik14 = parseFloat(this.p012("p7a"));
          return this.wynik14;
      },
      calc15() {
          this.wynik15 = parseFloat(this.p024("p7b"));
          return this.wynik15;
      },
      calc16() {
          this.wynik16 = parseFloat(this.p006("p7c"));
          return this.wynik16;
      },
      calc17() {
          this.wynik17 = parseFloat(this.p012("p7d"));
          return this.wynik17;
      },
      calc18() {
          this.wynik18 = parseFloat(this.p121("p8a-krotki"));
          return this.wynik18;
      },
      calc19() {
          this.wynik19 = parseFloat(this.p159("p8a-dlugi"));
          return this.wynik19;
      },
      calc20() {
          this.wynik20 = parseFloat(this.p149("p8b-krotki"));
          return this.wynik20;
      },
      calc21() {
          this.wynik21 = parseFloat(this.p194("p8b-dlugi"));
          return this.wynik21;
      },
      calc22() {
          this.wynik22 = parseFloat(this.p287("p8c"));
          return this.wynik22;
      },
      calc23() {
          this.wynik23 = parseFloat(this.p149("p8d-krotki"));
          return this.wynik23;
      },
      calc24() {
          this.wynik24 = parseFloat(this.p194("p8d-dlugi"));
          return this.wynik24;
      },
      calc25() {
          this.wynik25 = parseFloat(this.p219("p8e-krotki"));
          return this.wynik25;
      },
      calc26() {
          this.wynik26 = parseFloat(this.p272("p8e-dlugi"));
          return this.wynik26;
      },
      calc27() {
          this.wynik27 = parseFloat(this.p219("p8f-krotki"));
          return this.wynik27;
      },
      calc28() {
          this.wynik28 = parseFloat(this.p272("p8f-dlugi"));
          return this.wynik28;
      },
      calc29() {
          this.wynik29 = parseFloat(this.p247("p8g-krotki"));
          return this.wynik29;
      },
      calc30() {
          this.wynik30 = parseFloat(this.p307("p8g-dlugi"));
          return this.wynik30;
      },
      calc31() {
          this.wynik31 = parseFloat(this.p316("p8h-krotki"));
          return this.wynik31;
      },
      calc32() {
          this.wynik32 = parseFloat(this.p385("p8h-dlugi"));
          return this.wynik32;
      },
      calc33() {
          this.wynik33 = parseFloat(this.p375("p8i"));
          return this.wynik33;
      },
      calc34() {
          this.wynik34 = parseFloat(this.p415("p9a"));
          return this.wynik34;
      },
      calc35() {
          this.wynik35 = parseFloat(this.p415("p9b"));
          return this.wynik35;
      },
      calc36() {
          this.wynik36 = parseFloat(this.p050("p10"));
          return this.wynik36;
      },
      calc37() {
          this.wynik37 = parseFloat(this.p050("p11"));
          return this.wynik37;
      },
      calc38() {
          this.wynik38 = parseFloat(this.p050("p12"));
          return this.wynik38;
      },
      calc39() {
          this.wynik39 = parseFloat(this.p02625("p13"));
          return this.wynik39;
      },
      calc40() {
          this.wynik40 = parseFloat(this.p0375("p14"));
          return this.wynik40;
      },
      calc41() {
          this.wynik41 = parseFloat(this.p0232("p25"));
          return this.wynik41;
      },
      calc42() {
          this.wynik42 = parseFloat(this.p1325("p15-krotki"));
          return this.wynik42;
      },
      calc43() {
          this.wynik43 = parseFloat(this.p3423("p15-dlugi"));
          return this.wynik43;
      },
      calc44() {
          this.wynik44 = parseFloat(this.p123("p16-krotki"));
          return this.wynik44;
      },
      calc45() {
          this.wynik45 = parseFloat(this.p310("p16-dlugi"));
          return this.wynik45;
      },
      calc46() {
          this.wynik46 = parseFloat(this.p171("p17"));
          return this.wynik46;
      },
      calc47() {
          this.wynik47 = parseFloat(this.p012("p18"));
          return this.wynik47;
      },
      calc48() {
          this.wynik48 = parseFloat(this.p012("p19"));
          return this.wynik48;
      },
      calc49() {
          this.wynik49 = parseFloat(this.p012("p20"));
          return this.wynik49;
      },
      calc50() {
          this.wynik50 = parseFloat(this.p012("p20-chodnik"));
          return this.wynik50;
      },
      calc51() {
          this.wynik51 = parseFloat(this.p038("p21a"));
          return this.wynik51;
      },
      calc52() {
          this.wynik52 = parseFloat(this.p038("p21b"));
          return this.wynik52;
      },
      calc53() {
          this.wynik53 = parseFloat(this.p110("p22-krotki"));
          return this.wynik53;
      },
      calc54() {
          this.wynik54 = parseFloat(this.p280("p22-dlugi"));
          return this.wynik54;
      },
      calc55() {
          this.wynik55 = parseFloat(this.p0662("p23"));
          return this.wynik55;
      },
      calc56() {
          this.wynik56 = parseFloat(this.p076("p24"));
          return this.wynik56;
      },
      suma(){
          return (
              this.wynik1  + this.wynik2  + this.wynik3  + this.wynik4  + this.wynik5  +
              this.wynik6  + this.wynik7  + this.wynik8  + this.wynik9  + this.wynik10 +
              this.wynik11 + this.wynik12 + this.wynik13 + this.wynik14 + this.wynik15 +
              this.wynik16 + this.wynik17 + this.wynik18 + this.wynik19 + this.wynik20 +
              this.wynik21 + this.wynik22 + this.wynik23 + this.wynik24 + this.wynik25 +
              this.wynik26 + this.wynik27 + this.wynik28 + this.wynik29 + this.wynik30 +
              this.wynik31 + this.wynik32 + this.wynik33 + this.wynik34 + this.wynik35 +
              this.wynik36 + this.wynik37 + this.wynik38 + this.wynik39 + this.wynik40 +
              this.wynik41 + this.wynik42 + this.wynik43 + this.wynik44 + this.wynik45 +
              this.wynik46 + this.wynik47 + this.wynik48 + this.wynik49 + this.wynik50 +
              this.wynik51 + this.wynik52 + this.wynik53 + this.wynik54 + this.wynik55 +
              this.wynik56 
          ).toFixed(3);
      },
      parentTextContent(number, calc){
        if(calc > 0) {
          var text = this.char[parseInt(number)-1] + " - " + calc + "m²\n";
        } 
        return text;
      },
      addText(){
        let parent = this.getIdTextArea("result-text");
        if(this.suma() > 0){
          parent.style.display = "block";
          parent.textContent = "";
          if (this.calc1() > 0)  { parent.textContent = parent.textContent + this.parentTextContent("1", this.calc1()); }
          if (this.calc2() > 0)  { parent.textContent = parent.textContent + this.parentTextContent("2", this.calc2()); }
          if (this.calc3() > 0)  { parent.textContent = parent.textContent + this.parentTextContent("3", this.calc3()); }
          if (this.calc4() > 0)  { parent.textContent = parent.textContent + this.parentTextContent("4", this.calc4()); }
          if (this.calc5() > 0)  { parent.textContent = parent.textContent + this.parentTextContent("5", this.calc5()); }
          if (this.calc6() > 0)  { parent.textContent = parent.textContent + this.parentTextContent("6", this.calc6()); }
          if (this.calc7() > 0)  { parent.textContent = parent.textContent + this.parentTextContent("7", this.calc7()); }
          if (this.calc8() > 0)  { parent.textContent = parent.textContent + this.parentTextContent("8", this.calc8()); }
          if (this.calc9() > 0)  { parent.textContent = parent.textContent + this.parentTextContent("9", this.calc9()); }
          if (this.calc10() > 0) { parent.textContent = parent.textContent + this.parentTextContent("10", this.calc10()); }
          if (this.calc11() > 0) { parent.textContent = parent.textContent + this.parentTextContent("11", this.calc11()); }
          if (this.calc12() > 0) { parent.textContent = parent.textContent + this.parentTextContent("12", this.calc12()); }
          if (this.calc13() > 0) { parent.textContent = parent.textContent + this.parentTextContent("13", this.calc13()); }
          if (this.calc14() > 0) { parent.textContent = parent.textContent + this.parentTextContent("14", this.calc14()); }
          if (this.calc15() > 0) { parent.textContent = parent.textContent + this.parentTextContent("15", this.calc15()); }
          if (this.calc16() > 0) { parent.textContent = parent.textContent + this.parentTextContent("16", this.calc16()); }
          if (this.calc17() > 0) { parent.textContent = parent.textContent + this.parentTextContent("17", this.calc17()); }
          if (this.calc18() > 0) { parent.textContent = parent.textContent + this.parentTextContent("18", this.calc18()); }
          if (this.calc19() > 0) { parent.textContent = parent.textContent + this.parentTextContent("19", this.calc19()); }
          if (this.calc20() > 0) { parent.textContent = parent.textContent + this.parentTextContent("20", this.calc20()); }
          if (this.calc21() > 0) { parent.textContent = parent.textContent + this.parentTextContent("21", this.calc21()); }
          if (this.calc22() > 0) { parent.textContent = parent.textContent + this.parentTextContent("22", this.calc22()); }
          if (this.calc23() > 0) { parent.textContent = parent.textContent + this.parentTextContent("23", this.calc23()); }
          if (this.calc24() > 0) { parent.textContent = parent.textContent + this.parentTextContent("24", this.calc24()); }
          if (this.calc25() > 0) { parent.textContent = parent.textContent + this.parentTextContent("25", this.calc25()); }
          if (this.calc26() > 0) { parent.textContent = parent.textContent + this.parentTextContent("26", this.calc26()); }
          if (this.calc27() > 0) { parent.textContent = parent.textContent + this.parentTextContent("27", this.calc27()); }
          if (this.calc28() > 0) { parent.textContent = parent.textContent + this.parentTextContent("28", this.calc28()); }
          if (this.calc29() > 0) { parent.textContent = parent.textContent + this.parentTextContent("29", this.calc29()); }
          if (this.calc30() > 0) { parent.textContent = parent.textContent + this.parentTextContent("30", this.calc30()); }
          if (this.calc31() > 0) { parent.textContent = parent.textContent + this.parentTextContent("31", this.calc31()); }
          if (this.calc32() > 0) { parent.textContent = parent.textContent + this.parentTextContent("32", this.calc32()); }
          if (this.calc33() > 0) { parent.textContent = parent.textContent + this.parentTextContent("33", this.calc33()); }
          if (this.calc34() > 0) { parent.textContent = parent.textContent + this.parentTextContent("34", this.calc34()); }
          if (this.calc35() > 0) { parent.textContent = parent.textContent + this.parentTextContent("35", this.calc35()); }
          if (this.calc36() > 0) { parent.textContent = parent.textContent + this.parentTextContent("36", this.calc36()); }
          if (this.calc37() > 0) { parent.textContent = parent.textContent + this.parentTextContent("37", this.calc37()); }
          if (this.calc38() > 0) { parent.textContent = parent.textContent + this.parentTextContent("38", this.calc38()); }
          if (this.calc39() > 0) { parent.textContent = parent.textContent + this.parentTextContent("39", this.calc39()); }
          if (this.calc40() > 0) { parent.textContent = parent.textContent + this.parentTextContent("40", this.calc40()); }
          if (this.calc41() > 0) { parent.textContent = parent.textContent + this.parentTextContent("41", this.calc41()); }
          if (this.calc42() > 0) { parent.textContent = parent.textContent + this.parentTextContent("42", this.calc42()); }
          if (this.calc43() > 0) { parent.textContent = parent.textContent + this.parentTextContent("43", this.calc43()); }
          if (this.calc44() > 0) { parent.textContent = parent.textContent + this.parentTextContent("44", this.calc44()); }
          if (this.calc45() > 0) { parent.textContent = parent.textContent + this.parentTextContent("45", this.calc45()); }
          if (this.calc46() > 0) { parent.textContent = parent.textContent + this.parentTextContent("46", this.calc46()); }
          if (this.calc47() > 0) { parent.textContent = parent.textContent + this.parentTextContent("47", this.calc47()); }
          if (this.calc48() > 0) { parent.textContent = parent.textContent + this.parentTextContent("48", this.calc48()); }
          if (this.calc49() > 0) { parent.textContent = parent.textContent + this.parentTextContent("49", this.calc49()); }
          if (this.calc50() > 0) { parent.textContent = parent.textContent + this.parentTextContent("50", this.calc50()); }
          if (this.calc51() > 0) { parent.textContent = parent.textContent + this.parentTextContent("51", this.calc51()); }
          if (this.calc52() > 0) { parent.textContent = parent.textContent + this.parentTextContent("52", this.calc52()); }
          if (this.calc53() > 0) { parent.textContent = parent.textContent + this.parentTextContent("53", this.calc53()); }
          if (this.calc54() > 0) { parent.textContent = parent.textContent + this.parentTextContent("54", this.calc54()); }
          if (this.calc55() > 0) { parent.textContent = parent.textContent + this.parentTextContent("55", this.calc55()); }
          if (this.calc56() > 0) { parent.textContent = parent.textContent + this.parentTextContent("56", this.calc56()); }
          parent.textContent = parent.textContent + "suma = " + this.suma() + "m²";
        }
        else {
          parent.style.display = "none";
          parent.textContent = "";
        }
      },
  }
});