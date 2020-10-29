<template>
    <div id="app" class="row divInMain">
        <section class="result col-md-5">
                <form name="form" action="plik.py" method="POST" target="_blank">
                    <textarea id="result-text" form="form" name="textcontent" value></textarea>
                    <input type="submit" value="Submit" />
                </form>
                <div id="suma">
                    suma
                </div>
            </section>
            <section class="calculator col-md-12">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="kalk1-tab" data-toggle="tab" href="#kalk1" role="tab"
                                aria-controls="kalk1" aria-selected="true">
                                P-1a<br>
                                P-1b<br>
                                P-1c
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="kalk2-tab" data-toggle="tab" href="#kalk2" role="tab"
                                aria-controls="kalk2" aria-selected="false">
                                P-1d &nbsp; P-2a<br>
                                P-1e &nbsp; P-2b<br>
                            </a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" id="kalk4-tab" data-toggle="tab" href="#kalk4" role="tab"
                                aria-controls="kalk4" aria-selected="false">
                                P-3a <br>
                                P-3b <br>
                                P-4
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="kalk5-tab" data-toggle="tab" href="#kalk5" role="tab"
                                aria-controls="kalk5" aria-selected="false">
                                P-5 <br>
                                P-6 <br>
                                P-6a
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="kalk6-tab" data-toggle="tab" href="#kalk6" role="tab"
                                aria-controls="kalk6" aria-selected="false">
                                P-7a &nbsp; P-7c<br>
                                P-7b &nbsp; P-7d<br>
                            </a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" id="kalk8-tab" data-toggle="tab" href="#kalk8" role="tab"
                                aria-controls="kalk8" aria-selected="false">
                                P-8a <br>
                                P-8b <br>
                                P-8c
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="kalk9-tab" data-toggle="tab" href="#kalk9" role="tab"
                                aria-controls="kalk9" aria-selected="false">
                                P-8e <br>
                                P-8f <br>
                                P-8g
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="kalk10-tab" data-toggle="tab" href="#kalk10" role="tab"
                                aria-controls="kalk10" aria-selected="false">
                                P-8h <br>
                                P-8i <br>
                                P-9a i 9b
                            </a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" id="kalk12-tab" data-toggle="tab" href="#kalk12" role="tab"
                                aria-controls="kalk12" aria-selected="false">
                                P-10 &nbsp; P-13<br>
                                P-11 &nbsp; P-14<br>
                                P-12 &nbsp; P-25
                            </a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" id="kalk14-tab" data-toggle="tab" href="#kalk14" role="tab"
                                aria-controls="kalk14" aria-selected="false">
                                P-15 &nbsp; P-17<br>
                                P-16 &nbsp; P-18<br>
                            </a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" id="kalk16-tab" data-toggle="tab" href="#kalk16" role="tab"
                                aria-controls="kalk16" aria-selected="false">
                                P-19 &nbsp; P-20 <br>
                                P-20 &nbsp; P-21<br>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="kalk17-tab" data-toggle="tab" href="#kalk17" role="tab"
                                aria-controls="kalk17" aria-selected="false">
                                P-22 <br>
                                P-23 <br>
                                P-24
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="card-body">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane show active" id="kalk1" role="tabpanel" aria-labelledby="kalk1-tab">
                            <div class="row">
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-1a</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-1a.jpg" alt="Znak P-1a">
                                        </div>
                                        <div class="calc-item">
                                            <span id="p1a-add-sum">0.04m² x</span>
                                            <input id="p1a" v-on:click="calc1" type="number" min="0" value="0">
                                            <span id="dodajP1a">
                                                wynik: {{wynik1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-1b</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-1b.jpg" alt="Znak P-1b">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.04m² x</span>
                                            <input id="p1b" v-on:click="calc2" type="number" min="0" value="0">
                                            <span id="dodajP1b">
                                                wynik: {{wynik2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-1c</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-1c.jpg" alt="Znak P-1c">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.12m² x</span>
                                            <input id="p1c" v-on:click="calc3" type="number" min="0" value="0">
                                            <span id="dodajP1c">
                                                wynik: {{wynik3}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- TU JEST SZABLON PUSTY DO ZNAKÓW -->
                        <div class="tab-pane" id="kalk2" role="tabpanel" aria-labelledby="kalk2-tab">
                            <div class="row">
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-1d</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-1d.jpg" alt="Znak P-1d">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.06m² x</span>
                                            <input id="p1d" v-on:click="calc4" type="number" min="0" value="0">
                                            <span id="dodajP1d">wynik: {{wynik4}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-1e</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-1e.jpg" alt="Znak P-1e">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.12m² x</span>
                                            <input id="p1e" v-on:click="calc5" type="number" min="0" value="0">
                                            <span id="dodajP1e">wynik: {{wynik5}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-2a</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-2a.jpg" alt="Znak P-2a">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.12m² x</span>
                                            <input id="p2a" v-on:click="calc6" type="number" min="0" value="0">
                                            <span id="dodajP2a">wynik: {{wynik6}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-2b</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-2b.jpg" alt="Znak P-2b">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.24m² x</span>
                                            <input id="p2b" v-on:click="calc7" type="number" min="0" value="0">
                                            <span id="dodajP2b">wynik: {{wynik7}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="kalk3" role="tabpanel" aria-labelledby="kalk3-tab">
                            <div class="row">

                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>nazwa znaku</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="" alt="">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">m²</span>
                                            <input id="" type="number" min="0" value="0">
                                            <span id="dodajP">wynik: 0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="kalk4" role="tabpanel" aria-labelledby="kalk4-tab">
                            <div class="row">
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-3a</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-3a.jpg" alt="Znak P-3a">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.20m² x</span>
                                            <input id="p3a" v-on:click="calc8" type="number" min="0" value="0">
                                            <span id="dodajP3a">wynik: {{wynik8}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-3b</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-3b.jpg" alt="Znak P-3b">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.18m² x</span>
                                            <input id="p3b" v-on:click="calc9" type="number" min="0" value="0">
                                            <span id="dodajP3b">wynik: {{wynik9}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-4</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-4.jpg" alt="Znak P-4">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.24m² x</span>
                                            <input id="p4" v-on:click="calc10" type="number" min="0" value="0">
                                            <span id="dodajP4">wynik: {{wynik10}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="kalk5" role="tabpanel" aria-labelledby="kalk5-tab">
                            <div class="row">
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-5</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-5.jpg" alt="Znak P-5">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.32m² x</span>
                                            <input id="p5" v-on:click="calc11" type="number" min="0" value="0">
                                            <span id="dodajP5">wynik: {{wynik11}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-6</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-6.jpg" alt="Znak P-6">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.08m² x</span>
                                            <input id="p6" v-on:click="calc12" type="number" min="0" value="0">
                                            <span id="dodajP6">wynik: {{wynik12}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-6a</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-6a.jpg" alt="Znak P-6a">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.17m² x</span>
                                            <input id="p6a" v-on:click="calc13" type="number" min="0" value="0">
                                            <span id="dodajP6a">wynik: {{wynik13}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="kalk6" role="tabpanel" aria-labelledby="kalk6-tab">
                            <div class="row">
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-7a</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-7a.jpg" alt="Znak P-7a">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.12m² x</span>
                                            <input id="p7a" v-on:click="calc14" type="number" min="0" value="0">
                                            <span id="dodajP7a">wynik: {{wynik14}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-7b</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-7b.jpg" alt="Znak P-7b">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.24m² x</span>
                                            <input id="p7b" v-on:click="calc15" type="number" min="0" value="0">
                                            <span id="dodajP7b">wynik: {{wynik15}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-7c</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-7c.jpg" alt="Znak P-7c">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.06m² x</span>
                                            <input id="p7c" v-on:click="calc16" type="number" min="0" value="0">
                                            <span id="dodajP7c">wynik: {{wynik16}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-7d</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-7d.jpg" alt="Znak P-7d">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.12m² x</span>
                                            <input id="p7d" v-on:click="calc17" type="number" min="0" value="0">
                                            <span id="dodajP7d">wynik: {{wynik17}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="tab-pane" id="kalk7" role="tabpanel" aria-labelledby="kalk7-tab">
                            <div class="row">
                                <div class="col-md-4 column-char">

                                </div>
                                <div class="col-md-4 column-char">

                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>nazwa znaku</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="" alt="">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">m² x</span>
                                            <input id="" type="number" min="0" value="0">
                                            <span id="dodajP">wynik: 0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <div class="tab-pane" id="kalk8" role="tabpanel" aria-labelledby="kalk8-tab">
                            <div class="row">
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-8a krótki</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8a krotki.jpg"
                                                alt="Znak P-8a krótki">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">1.21m² x</span>
                                            <input id="p8a-krotki" v-on:click="calc18" type="number" min="0" value="0">
                                            <span id="dodajP8a-krotki">wynik: {{wynik18}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-8a długi</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8a dlugi.jpg"
                                                alt="Znak P-8a długi">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">1.59m² x</span>
                                            <input id="p8a-dlugi" v-on:click="calc19" type="number" min="0" value="0">
                                            <span id="dodajP8a-dlugi">wynik: {{wynik19}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-8b krótki</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8b krótki.jpg"
                                                alt="Znak P-8b krótki">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">1.49m² x</span>
                                            <input id="p8b-krotki" v-on:click="calc20" type="number" min="0" value="0">
                                            <span id="dodajP8b-krotki">wynik: {{wynik20}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-8b długi</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8b długi.jpg"
                                                alt="Znak P-8b długi">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">1.94m² x</span>
                                            <input id="p8b-dlugi" v-on:click="calc21" type="number" min="0" value="0">
                                            <span id="dodajP8b-dlugi">wynik: {{wynik21}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-8c</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8c.jpg" alt="Znak P-8c">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">2.87m² x</span>
                                            <input id="p8c" v-on:click="calc22" type="number" min="0" value="0">
                                            <span id="dodajP8c">wynik: {{wynik22}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-8d krótki</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8b krótki.jpg"
                                                alt="Znak P-8d krótki">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">1.49m² x</span>
                                            <input id="p8d-krotki" v-on:click="calc23" type="number" min="0" value="0">
                                            <span id="dodajP8d-krotki">wynik: {{wynik23}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-8d długi</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8b długi.jpg"
                                                alt="Znak P-8d długi">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">1.94m² x</span>
                                            <input id="p8d-dlugi" v-on:click="calc24" type="number" min="0" value="0">
                                            <span id="dodajP8d-dlugi">wynik: {{wynik24}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="kalk9" role="tabpanel" aria-labelledby="kalk9-tab">
                            <div class="row">
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-8e krótki</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8e krótki.jpg"
                                                alt="Znak P-8e krótki">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">2.19m² x</span>
                                            <input id="p8e-krotki" v-on:click="calc25" type="number" min="0" value="0">
                                            <span id="dodajP8e-krotki">wynik: {{wynik25}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-8e długi</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8e długi.jpg"
                                                alt="Znak P-8e długi">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">2.72m² x</span>
                                            <input id="p8e-dlugi" v-on:click="calc26" type="number" min="0" value="0">
                                            <span id="dodajP8e-dlugi">wynik: {{wynik26}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-8f krótki</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8f krótki.jpg"
                                                alt="Znak P-8f krótki">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">2.19m² x</span>
                                            <input id="p8f-krotki" v-on:click="calc27" type="number" min="0" value="0">
                                            <span id="dodajP8f-krotki">wynik: {{wynik27}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-8f długi</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8f długi.jpg"
                                                alt="Znak P-8f długi">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">2.72m² x</span>
                                            <input id="p8f-dlugi" v-on:click="calc28" type="number" min="0" value="0">
                                            <span id="dodajP8f-dlugi">wynik: {{wynik28}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-8g krórki</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8g krótki.jpg"
                                                alt="Znak P-8g krótki">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">2.47m² x</span>
                                            <input id="p8g-krotki" v-on:click="calc29" type="number" min="0" value="0">
                                            <span id="dodajP8g-krotki">wynik: {{wynik29}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-8g długi</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8g długi.jpg"
                                                alt="Znak P-8g długi">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">3.07m² x</span>
                                            <input id="p8g-dlugi" v-on:click="calc30" type="number" min="0" value="0">
                                            <span id="dodajP8g-dlugi">wynik: {{wynik30}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="kalk10" role="tabpanel" aria-labelledby="kalk10-tab">
                            <div class="row">
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-8h krótki</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8h krótki.jpg"
                                                alt="Znak P-8h krótki">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">3.16m² x</span>
                                            <input id="p8h-krotki" v-on:click="calc31" type="number" min="0" value="0">
                                            <span id="dodajP8h-krotki">wynik: {{wynik31}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-8h długi</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8h długi.jpg"
                                                alt="Znak P-8h długi">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">3.85m² x</span>
                                            <input id="p8h-dlugi" v-on:click="calc32" type="number" min="0" value="0">
                                            <span id="dodajP8h-dlugi">wynik: {{wynik32}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-8i</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-8i.jpg" alt="Znak P-8i">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">3.75m² x</span>
                                            <input id="p8i" v-on:click="calc33" type="number" min="0" value="0">
                                            <span id="dodajP8i">wynik: {{wynik33}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-9a</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-9a.jpg" alt="Znak P-9a">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">4.15m² x</span>
                                            <input id="p9a" v-on:click="calc34" type="number" min="0" value="0">
                                            <span id="dodajP9a">wynik: {{wynik34}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-9b</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-9b.jpg" alt="Znak P-9b">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">4.15m² x</span>
                                            <input id="p9b" v-on:click="calc35" type="number" min="0" value="0">
                                            <span id="dodajP9b">wynik: {{wynik35}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="tab-pane" id="kalk11" role="tabpanel" aria-labelledby="kalk11-tab">
                            P-9a <br>
                            P-9b <br>
                            <div class="row">
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-9a</h2>
                                        <img class="img-responsive" src="images/road/P-9a.jpg" alt="Znak P-9a">
                                        <div class="calc-item">
                                            <span id="">m² x</span>
                                            <input id="p9a" type="number" min="0" value="0">
                                            <span id="dodajP">wynik: 0</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-9b</h2>
                                        <img class="img-responsive" src="images/road/P-9b.jpg" alt="Znak P-9b">
                                        <div class="calc-item">
                                            <span id="">m² x</span>
                                            <input id="p9b" type="number" min="0" value="0">
                                            <span id="dodajP">wynik: 0</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>nazwa znaku</h2>
                                        <img class="img-responsive" src="" alt="">
                                        <div class="calc-item">
                                            <span id="">m² x</span>
                                            <input id="" type="number" min="0" value="0">
                                            <span id="dodajP">wynik: 0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <div class="tab-pane" id="kalk12" role="tabpanel" aria-labelledby="kalk12-tab">
                            <div class="row">
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-10</h2>
                                        <div class="div-img div-img-rectangle">
                                            <img class="img-responsive" src="images/road/P-10.jpg" alt="Znak P-10">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.5m² x</span>
                                            <input id="p10" v-on:click="calc36" type="number" min="0" value="0">
                                            <span id="dodajP10">wynik: {{wynik36}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-11</h2>
                                        <div class="div-img div-img-rectangle">
                                            <img class="img-responsive" src="images/road/P-11.jpg" alt="Znak P-11">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.5m² x</span>
                                            <input id="p11" v-on:click="calc37" type="number" min="0" value="0">
                                            <span id="dodajP11">wynik: {{wynik37}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-12</h2>
                                        <div class="div-img div-img-rectangle">
                                            <img class="img-responsive" src="images/road/P-12.jpg" alt="Znak P-12">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.5m² x</span>
                                            <input id="p12" v-on:click="calc38" type="number" min="0" value="0">
                                            <span id="dodajP12">wynik: {{wynik38}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-13</h2>
                                        <div class="div-img div-img-rectangle">
                                            <img class="img-responsive" src="images/road/P-13.jpg" alt="Znak P-13">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.2625m² x</span>
                                            <input id="p13" v-on:click="calc39" type="number" min="0" value="0">
                                            <span id="dodajP13">wynik: {{wynik39}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-14</h2>
                                        <div class="div-img div-img-rectangle">
                                            <img class="img-responsive" src="images/road/P-14.jpg" alt="Znak P-14">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.375m² x</span>
                                            <input id="p14" v-on:click="calc40" type="number" min="0" value="0">
                                            <span id="dodajP14">wynik: {{wynik40}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-25</h2>
                                        <div class="div-img div div-img-rectangle">
                                            <img class="img-responsive" src="images/road/P-25.jpg" alt="Znak P-25">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.232m² x</span>
                                            <input id="p25" v-on:click="calc41" type="number" min="0" value="0">
                                            <span id="dodajP25">wynik: {{wynik41}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 
                        <div class="tab-pane" id="kalk13" role="tabpanel" aria-labelledby="kalk13-tab">
                            <div class="row">

                            </div>
                        </div> -->

                        <div class="tab-pane" id="kalk14" role="tabpanel" aria-labelledby="kalk14-tab">
                            <div class="row">
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-15 krótki</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-15 krótki.jpg"
                                                alt="Znak P-15 krótki">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">1.325m² x</span>
                                            <input id="p15-krotki" v-on:click="calc42" type="number" min="0" value="0">
                                            <span id="dodajP15-krotki">wynik: {{wynik42}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-15 długi</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-15 długi.jpg"
                                                alt="Znak P-15 długi">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">3.423m² x</span>
                                            <input id="p15-dlugi" v-on:click="calc43" type="number" min="0" value="0">
                                            <span id="dodajP15-dlugi">wynik: {{wynik43}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-16 krótki</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-16 krótki.jpg"
                                                alt="Znak P-16 krótki">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">1.23m² x</span>
                                            <input id="p16-krotki" v-on:click="calc44" type="number" min="0" value="0">
                                            <span id="dodajP16-krotki">wynik: {{wynik44}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-16 długi</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-16 długi.jpg"
                                                alt="Znak P-16 długi">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">3.1m² x</span>
                                            <input id="p16-dlugi" v-on:click="calc45" type="number" min="0" value="0">
                                            <span id="dodajP16-dlugi">wynik: {{wynik45}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-17</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-17.jpg" alt="Znak P-17">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">1.71m² x</span>
                                            <input id="p17" v-on:click="calc46" type="number" min="0" value="0">
                                            <span id="dodajP17">wynik: {{wynik46}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-18</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-18.jpg" alt="Znak P-18">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.12m² x</span>
                                            <input id="p18" v-on:click="calc47" type="number" min="0" value="0">
                                            <span id="dodajP18">wynik: {{wynik47}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="tab-pane" id="kalk15" role="tabpanel" aria-labelledby="kalk15-tab">
                            <div class="row">
                                <div class="col-md-4 column-char">

                                </div>
                                <div class="col-md-4 column-char">

                                </div>
                                
                            </div>
                        </div> -->

                        <div class="tab-pane" id="kalk16" role="tabpanel" aria-labelledby="kalk16-tab">
                            <div class="row">
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-19</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-19.jpg" alt="Znak P-19">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.12m² x</span>
                                            <input id="p19" v-on:click="calc48" type="number" min="0" value="0">
                                            <span id="dodajP19">wynik: {{wynik48}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-20</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-20.jpg" alt="Znak P-20">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.12m² x</span>
                                            <input id="p20" v-on:click="calc49" type="number" min="0" value="0">
                                            <span id="dodajP20">wynik: {{wynik49}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-20 na chodniku</h2>
                                        <div class="div-img div-img-rectangle">
                                            <img class="img-responsive" src="images/road/P-20 na chodniku.jpg"
                                                alt="Znak P-20 na chodniku">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.12m² x</span>
                                            <input id="p20-chodnik" v-on:click="calc50" type="number" min="0" value="0">
                                            <span id="dodajP20Chodnik">wynik: {{wynik50}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-21a</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-21b.jpg" alt="Znak P-21">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.38m² x</span>
                                            <input id="p21a" v-on:click="calc51" type="number" min="0" value="0">
                                            <span id="dodajP21a">wynik: {{wynik51}}</span>
                                        </div>
                                    </div>
                                    <div class="description-char">
                                        <h2>Znak P-21b</h2>
                                        <div class="div-img">
                                            <img class="img-responsive" src="images/road/P-21b.jpg" alt="Znak P-21">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.38m² x</span>
                                            <input id="p21b" v-on:click="calc52" type="number" min="0" value="0">
                                            <span id="dodajP21b">wynik: {{wynik52}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="kalk17" role="tabpanel" aria-labelledby="kalk17-tab">
                            <div class="row">
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-22 krótki</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-22 krótki.jpg"
                                                alt="Znak P-22 krótki">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">1.1m² x</span>
                                            <input id="p22-krotki" v-on:click="calc53" type="number" min="0" value="0">
                                            <span id="dodajP22-krotki">wynik: {{wynik53}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-22 długi</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-22 długi.jpg"
                                                alt="Znak P-22 długi">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">2.8m² x</span>
                                            <input id="p22-dlugi" v-on:click="calc54" type="number" min="0" value="0">
                                            <span id="dodajP22-dlugi">wynik: {{wynik54}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-23</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-23.jpg" alt="Znak P-23">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.662m² x</span>
                                            <input id="p23" v-on:click="calc55" type="number" min="0" value="0">
                                            <span id="dodajP23">wynik: {{wynik55}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 column-char">
                                    <div class="description-char">
                                        <h2>Znak P-24</h2>
                                        <div class="div-img div-img-square">
                                            <img class="img-responsive" src="images/road/P-24.jpg" alt="Znak P-24">
                                        </div>
                                        <div class="calc-item">
                                            <span id="">0.76m² x</span>
                                            <input id="p24" v-on:click="calc56" type="number" min="0" value="0">
                                            <span id="dodajP24">wynik: {{wynik56}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>