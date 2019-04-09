<?php
/**
 * Created by PhpStorm.
 * User: Danileviciu
 * Date: 2019-04-09
 * Time: 10:00
 */
include 'header.php';
?>
    <div class="page_body">
        <div class="container blue_wrap">
            <div class="row">
                <div class="col-lg-3">
                    <button class="button" onclick="patirtis()"><span>Darbo patirtis</span></button>
                    <button class="button" onclick="igudziai(); myMove()"><span>Įgųdžiai</span></button>
                    <button class="button" onclick="issilavinimas()"><span>Išsilavinimas</span></button>
                    <button class="button" onclick="kalbos()"><span>Kalbos</span></button>
                    <button class="button" onclick="motyvacinis()"><span>Motyvacinis laiškas</span></button>
                </div>
                <div class="col-lg-9">
                    <div id="patirtis">
                        <h2 style="text-align: center">Darbo patirtis</h2>
                        <hr>
                        <h6>2005-06-30–2010-05-31 SYS administratorius, derintojas</h6>
                        <p>
                            UAB "Iremas" fil. "Letenerga", Jonava (Lithuania)
                            80-ies kompiuterinių darbo vietų priežiūra.
                            Kompiuterinės technikos ir programinės įrangos remontas.
                            Dokumentavimas ir licenzijavimas.
                            Interneto ryšių ir saugumo palaikymas.
                        </p>
                        <h6>2012-06-30–2015-06-30 Sandėlininkas</h6>
                        <p>
                            UAB "Talga", Jonava (Lithuania)
                            Produkcijos priėmimas, dokumentavimas, išsiuntimas.
                            Logistikos procesų tobulinimas, produkcijos iškrovimo, suvežimo į sandėlį, atrinkimo, pakrovimo
                            organizavimas.
                            Darbas su brūkšninių kodų skaneriu.

                        </p>
                        <h6>2016-10-31–2018-07-31 Krovininių platformų ir krautuvų operatoriai</h6>
                        <p>
                            UAB "HEADEX", Dormagen (Vokietija)
                            Darbas su dūžiom prekėm.
                            Naujos produkcijos suvežimas į sandėlius saugojimui.
                            Užsakymų surinkimas, lokacijų papildymas produkcija surinkėjams.

                        </p>
                        <h6>2018-07-31–Šiuo metu Krovininių platformų ir krautuvų operatoriai</h6>
                        <p>
                            UAB "Baltic fish export", Kaunas (Lithuania)
                            Naujos produkcijos suvežimas į sandėlius saugojimui.
                            Lokacijų papildymas produkcija surinkėjams.

                        </p>
                    </div>
                    <div id="igudziai" style="display: none">
                        <h2 style="text-align: center">Įgųdžiai</h2>

                        <h4 style="text-align: center">Skaitmeniniai gebėjimai</h4>
                        <table>
                            <tr>
                                <th colspan="5">ĮSIVERTINIMAS</th>
                            </tr>
                            <tr>
                                <th>Informacijos apdorojimas</th>
                                <th>Komunikacija</th>
                                <th>Turinio kūrimas</th>
                                <th>Saugumas</th>
                                <th>Problemų sprendimas</th>
                            </tr>
                            <tr>
                                <td>Įgudęs</td>
                                <td>Įgudęs</td>
                                <td>Įgudęs</td>
                                <td>Įgudęs</td>
                                <td>Įgudęs</td>
                            </tr>
                        </table>
                    </div>
                    <div id="issilavinimas" style="display: none">
                        <h2 style="text-align: center">Išsilavinimas</h2>
                        <h6>2008m. Termovizijos specialistas</h6>
                        <p>
                            Elintos MS, Kaunas (Lithuania)
                        </p>
                        <h6>2010m. Bazinis kario savanorio įgūdžių kursas</h6>
                        <p>
                            LDK Butigeidžio Dragūnų mokomasis batalionas, Jonava (Lithuania)
                        </p>
                        <h6>2012m. Krautuvų vairuotojas</h6>
                        <p>
                            Jonava (Lithuania)
                            Automobilinių ir elektrinių krautuvų operatorius.
                        </p>
                        <h6>2018m. Programuotojas (paryškinti)</h6>
                        <p>
                            UAB "Baltijos Technologijų Institutas" , Kaunas (Lithuania)
                            Jaunesniojo Java programuotojo profesinio mokymo diplomas
                            JAVA programavimas, web kūrimas. HTML, PHP, CSS, SASS, JS, JQuery, WordPress, GitHub, JAVA, MAVEN, TOMCAT, MySQL.

                        </p>
                    </div>
                    <div id="kalbos" style="display: none">
                        <h2 style="text-align: center">Kalbos</h2>
                        <p>
                            Gimtoji kalba lietuvių
                        </p>
                        <table>
                            <tr>
                                <th>Kalbos</th>
                                <th colspan="2">Supratimas</th>
                                <th colspan="2">Kalbėjimas</th>
                                <th>Rašymas</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>Klausymas</th>
                                <th>Skaitymas</th>
                                <th>Bendravimas žodžiu</th>
                                <th>Informacijos pateikimas žodžiu</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>Anglų k.</td>
                                <td>B2</td>
                                <td>B2</td>
                                <td>A2</td>
                                <td>A2</td>
                                <td>B1</td>
                            </tr>
                            <tr>
                                <td>Rusų k.</td>
                                <td>C2</td>
                                <td>B1</td>
                                <td>C2</td>
                                <td>C1</td>
                                <td>A2</td>
                            </tr>
                        </table>
                        <p>
                            Lygmenys: A1 ir A2: pradedantis vartotojas - B1 ir B2: pažengęs vartotojas - C1 ir C2: įgudęs vartotojas
                        </p>
                        <p>
                            Bendrieji Europos kalbų metmenys
                        </p>
                    </div>
                    <div id="motyvacinis" style="display: none">
                        <h2 style="text-align: center">Motyvacinis laiškas</h2>
                        <p>
                            Savo ateitį įsivaizduoju IT srityje, todėl dedu daug pastangų tobulėjimo link. Esu dar ganėtinai šviežias IT srityje, tačiau visada stengiuosi sau užsibrėžti kuo aukštesnius tikslus ir jų atkakliai siekti. Būtent užsispyrimas viena iš savybių, kuri nuolat skatina mane susikaupti ir atlikti net ir sudėtingiausius uždavinius.
                            Esu baigęs UAB "Baltijos Technologijų Institutas", kur įgijau jaunesniojo Java programuotojo kvalifikaciją. Studijų metu buvo išugdyti ne tik specialybiniai JAVA programavimo įgūdžiai, bet ir komunikavimo bei organizavimo. Atlikdamas praktines užduotis išmokau reprezentacinių interneto svetainių kūrimo ir SEO optimizavimo, naudojant WordPress arba kodo rašymą (HTML, PHP, CSS, SASS, JS, JQuery). Taip pat dirbti su MySQL naudojant kodą ir MySQLWorkbench. Sėkminga praktikos patirtis tinkamai susidorojus su visomis užduotimis padėjo išlavinti strateginį mastymą, situacijų analizavimą bei efektyvų laiko valdymą.
                            Šiuo metu ieškau darbdavio, kuris suteiktų man galimybę atskleisti ir parodyti rezultatus, dirbti naudingai bei  tobulėti. Darbe galėčiau pritaikyti studijų metu bei asmenines įgytas žinias. Domiuosi naujovėmis ir stengiuosi jas pritaikyti praktikoje. Norėčiau dirbti pilną darbo dieną, esant reikalui galėčiau dirbti ir viršvalandžius.
                            Tikiuosi, atsižvelgsite į mano kvalifikaciją, turimą patirtį bei svarbiausia - didelį norą mokytis ir tobulėti.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php include 'footer.php';?>