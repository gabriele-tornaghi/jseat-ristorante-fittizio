let fileXML=null;
let tabella;
let contatore; 
let parserToXML = new XMLSerializer;
let screenSize;
let tipologia, contenitoreListaPiatto
let letteraIniziale='a'
let codiceASCII = letteraIniziale.charCodeAt(0); 
let fileJson;
let urlCocktail;
let ingredienti;
let bloccoCarrello=false;
/*LA STINGA "stringaMenuXML" C'E' IL CONTENUTO DEL FILE MENU.XML*/

/* ************************************************************************************************************** */
// let stringaMenuXML="\
// <MENU>\
// <!-- La strutura va bene cosi  -->\
// <!-- rrs  -->\
//     <ALLA_CARTA>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Pasta al pesto</NOME>\
//             <PREZZO>10.5</PREZZO>\
//             <INGREDIENTI>Basilico, pinoli, aglio, pecorino, olio, penne</INGREDIENTI>\
//             <IMMAGINE>https://www.ricettealvolo.it/wp-content/uploads/2016/10/spaghetti-al-pesto.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Secondo</TIPO>\
//             <NOME>Salmone in umido</NOME>\
//             <PREZZO>13</PREZZO>\
//             <INGREDIENTI>Salmone fresco, saglio, cipolla, sedano, prezzemolo, alloro, capperi dissalati, pomodorini,vino bianco, peperoncino.</INGREDIENTI>\
//             <IMMAGINE>https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2016/12/1482511847_4ab0d4f481a73287d57f4d26495a55b18dbb9112-446246096.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Fusilli al salmone</NOME>\
//             <PREZZO>14.5</PREZZO>\
//             <INGREDIENTI>Fusilli, salmone affumicato, aglio, vino bianco, panna, besciamella, prezzemolo, parmigiano grattugiato, noce di burro</INGREDIENTI>\
//             <IMMAGINE>https://pasta.schedro.ua/wp-content/uploads/2018/11/03-Pop-Fusilli-al-salmone.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Dolce</TIPO>\
//             <NOME>Crema Catalana</NOME>\
//             <PREZZO>19</PREZZO>\
//             <INGREDIENTI>Latte, tuorli, zucchero, limoni, cannella, amido di mais, zucchero di canna</INGREDIENTI>\
//             <IMMAGINE>https://wips.plug.it/cips/buonissimo.org/cms/2011/08/crema-catalana-9.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Secondo</TIPO>\
//             <NOME>Pesce spada con verdure</NOME>\
//             <PREZZO>15</PREZZO>\
//             <INGREDIENTI>Fetta di pesce spada, lattuga, pomodorini, capperi sotto sale, olio evo</INGREDIENTI>\
//             <IMMAGINE>https://lericettedinai.it/wp-content/uploads/2020/09/Nai-spada-con-verdure.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Secondo</TIPO>\
//             <NOME>Involtini di vitello alla salvia</NOME>\
//             <PREZZO>13</PREZZO>\
//             <INGREDIENTI>Fettine di vitello, prosciutto cotto, salvia, aglio, vino bianco, succo di mezzo limone,noce di burro, olio extravergine d’oliva</INGREDIENTI>\
//             <IMMAGINE>https://www.spadellandia.it/upload/ricette/Involtini-di-vitella-alla-salvia_4848.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Bucatini alla amatriciana</NOME>\
//             <PREZZO>14</PREZZO>\
//             <INGREDIENTI>bucatini, pomodori pelati, guanciale stagionato, pecorino, peperoncino</INGREDIENTI>\
//             <IMMAGINE>https://media-assets.lacucinaitaliana.it/photos/620fbec8e7e7382463999060/3:4/w_750,h_1000,c_limit/bucatini-allamatriciana2.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Gnocchi di patate</NOME>\
//             <PREZZO>19</PREZZO>\
//             <INGREDIENTI>Patate rosse, farina, uova, sale, semola di grano duro </INGREDIENTI>\
//             <IMMAGINE>https://wips.plug.it/cips/buonissimo.org/cms/2013/04/gnocchi-di-patate-al-montasio-su-foglia-di-frico.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Lasagne al ragu</NOME>\
//             <PREZZO>15</PREZZO>\
//             <INGREDIENTI>Carne macinata di manzo, carne macinata di maiale, polpa di pomodoro, carota, sedano, cipolla, foglie di alloro, besciamella, pasta con uovo, parmigiano reggiano</INGREDIENTI>\
//             <IMMAGINE>https://cdn.ilclubdellericette.it/wp-content/uploads/2019/10/lasagne-al-ragu-di-soia-1280x720.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Secondo</TIPO>\
//             <NOME>Parmigiana di melanzane</NOME>\
//             <PREZZO>15</PREZZO>\
//             <INGREDIENTI>Melanzane ovali nere, passata di pomodoro, fiordilatte, parmigiano Reggiano, cipolle dorate, basilico, olio extravergine </INGREDIENTI>\
//             <IMMAGINE>https://ricetta.it/Uploads/Imgs/parmigiana-di-melanzane.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Secondo</TIPO>\
//             <NOME>Lombo di agnello con carote ed asparagi</NOME>\
//             <PREZZO>20</PREZZO>\
//             <INGREDIENTI>lombo di agnello irlandese, burro, pepe, cardamomo, coste di sedano, cipolla, salvia e rosmarino e vino bianco secco, carote, asparagi, miele di castagno, zenzero, succo di limone, menta, aglio</INGREDIENTI>\
//             <IMMAGINE>https://www.ristorazioneitalianamagazine.it/CMS/wp-content/uploads/2021/06/Dettaglio-Lombo-dagnello-irlandese-con-carote-ed-asparagi.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Dolce</TIPO>\
//             <NOME>Tiramisu</NOME>\
//             <PREZZO>20</PREZZO>\
//             <INGREDIENTI>\Mascarpone,uova, savoiardi, zucchero, caffè</INGREDIENTI>\
//             <IMMAGINE>https://media-assets.lacucinaitaliana.it/photos/62188f8ac735e2b54a74cf04/1:1/w_410,h_410,c_limit/Tiramis%C3%B9-450x410.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Dolce</TIPO>\
//             <NOME>Tortino di cioccolato con cuore fondente</NOME>\
//             <PREZZO>10</PREZZO>\
//             <INGREDIENTI>Cioccolato fondente, burro, zucchero, uova, farina, burro, zucchero a velo</INGREDIENTI>\
//             <IMMAGINE>https://www.giallozafferano.it/images/173-17316/Tortino-di-cioccolato-con-cuore-fondente_650x433_wm.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Dolce</TIPO>\
//             <NOME>Sachertorte</NOME>\
//             <PREZZO>12</PREZZO>\
//             <INGREDIENTI>Cioccolata fondente, albumi, farina, zucchero, tuorli, burro, zucchero a velo, vaniglia</INGREDIENTI>\
//             <IMMAGINE>https://www.vivodibenessere.it/wp-content/uploads/2013/12/sacher-torte.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Dolce</TIPO>\
//             <NOME>Panna cotta al lampone</NOME>\
//             <PREZZO>17</PREZZO>\
//             <INGREDIENTI>Panna fresca liquida, zucchero, vaniglia gelatina in fogli, lamponi</INGREDIENTI>\
//             <IMMAGINE>https://www.giornalelavoce.it/resizer/480/-1/true/2014/05/panna-cotta-2.jpg--.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Dolce</TIPO>\
//             <NOME>Cheescacke al limone</NOME>\
//             <PREZZO>11</PREZZO>\
//             <INGREDIENTI>Burro, ricotta, succo di limone, zucchero a velo, gelatina di fogli, formaggio fresco spalmabile</INGREDIENTI>\
//             <IMMAGINE>https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/6/2015/03/Cheesecake-al-limone-97209-3.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Secondo</TIPO>\
//             <NOME>Fegato con Cipolle</NOME>\
//             <PREZZO>15</PREZZO>\
//             <INGREDIENTI>Fegato di vitello, cipolle, olio extravergine, sale e pepe, zucchero semolato, aceto di vino rosso.</INGREDIENTI>\
//             <IMMAGINE>https://wips.plug.it/cips/buonissimo.org/cms/2017/09/fegato-cipolle.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Secondo</TIPO>\
//             <NOME>Involtini di platessa</NOME>\
//             <PREZZO>12</PREZZO>\
//             <INGREDIENTI>filetti di platessa, prugne, formaggio emmenthal, succo limone, olio extravergine, sale e pepe, fagiolini, pomodorini, limone, zucchine</INGREDIENTI>\
//             <IMMAGINE>http://elisacookingtime.it/wp-content/uploads/2014/09/foto-77.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Secondo</TIPO>\
//             <NOME>Insalata di mare</NOME>\
//             <PREZZO>10</PREZZO>\
//             <INGREDIENTI>Polpo, calamari, cozze, gamberi, alloro,, succo di limone, olio, prezzemolo</INGREDIENTI>\
//             <IMMAGINE>https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/styles/recipes_1200_800_fallback/public/fdl_content_import_it/insalata-di-mare.jpg?itok=foc6rdvz</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Secondo</TIPO>\
//             <NOME>Merluzzo in umido</NOME>\
//             <PREZZO>19</PREZZO>\
//             <INGREDIENTI>Merluzzo, patate lesse, polpa di pomodoro, olio, cucchiaio di patè di olive</INGREDIENTI>\
//             <IMMAGINE>https://www.giorgiomare.it/site/wp-content/uploads/2018/03/merluzzoinumido.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Orecchiette con le Cime di Rapa</NOME>\
//             <PREZZO>13</PREZZO>\
//             <INGREDIENTI>Cime di rapa, pangrattato, aglio, acciughe, filetti, olio extravergine, semola di grano duro</INGREDIENTI>\
//             <IMMAGINE>http://cdn.cook.stbm.it/thumbnails/ricette/9/9785/hd750x421.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Pasta al pomodoro</NOME>\
//             <PREZZO>10</PREZZO>\
//             <INGREDIENTI>Spaghetti, pomodoro, olio d OLIVA, basilico, aglio</INGREDIENTI>\
//             <IMMAGINE>https://assets.bonappetit.com/photos/57b000ccf1c801a1038bd5fc/16:9/w_1280,c_limit/mare-pasta-al-pomodoro-h.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Ravioli con funghi e tartufo</NOME>\
//             <PREZZO>13</PREZZO>\
//             <INGREDIENTI>Funghi misti, ricotta, aglio, uova, prezzemolo, parmigiano grattugiato, noce moscata, tartufo nero grattugiato, burro, olio, panna fresca, funghi, scaglie di ½ tartufo nero</INGREDIENTI>\
//             <IMMAGINE>data:image/jpeg;base64,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</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Spaghetti ai ricci di mare</NOME>\
//             <PREZZO>20</PREZZO>\
//             <INGREDIENTI>Spaghetti, ricci di mare, aglio in camicia, prezzemolo, olio extravergine , pepe, peperoncino</INGREDIENTI>\
//             <IMMAGINE>https://blog.giallozafferano.it/salezucchero/wp-content/uploads/2018/06/IMG_20160831_170105-e1560328717990.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Tagliatelle al ragu</NOME>\
//             <PREZZO>15</PREZZO>\
//             <INGREDIENTI>Tagliatelle, polpa di manzo macinata, polpa di maiale macinata, passata di pomodoro, pomodori pelati a pezzettoni, concentrato di pomodoro, aglio, cipolla, vino rosso, olio extravergine di oliva, pepe e peperoncino.</INGREDIENTI>\
//             <IMMAGINE>https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/styles/recipes_1200_800_fallback/public/fdl_content_import_it/tagliatelle-ragu.jpg?itok=YFdeBIB7</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Primo</TIPO>\
//             <NOME>Vellutata di funghi</NOME>\
//             <PREZZO>13</PREZZO>\
//             <INGREDIENTI>Funghi freschi misti,burro,aglio, cipollina, prezzemolo tritato, brodo vegetale, uovo,  farina, vino bianco,brodo vegetale.</INGREDIENTI>\
//             <IMMAGINE>https://www.chefstefanobarbato.com/ita/wp-content/uploads/2019/10/Vellutata_di_Funghi_Porcini_pres.jpg</IMMAGINE>\
//         </PIATTO>\
//     </ALLA_CARTA>\
//     <LISTA_VINI>\
//         <PIATTO>\
//             <TIPO>Vino</TIPO>\
//             <NOME>GEWÜRZTRAMINER DOC ALTO ADIGE</NOME>\
//             <PREZZO>28</PREZZO>\
//             <IMMAGINE>https://www.etilika.it/18053-large_default/gewuerztraminer-alto-adige-doc-2022-colterenzio.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Vino</TIPO>\
//             <NOME>BIANCO VENETO IGT AMICONE</NOME>\
//             <PREZZO>22</PREZZO>\
//             <IMMAGINE>https://lacantinadelbarbera.it/shop/27-large_default/amicone-bianco-veneto-igt-cantine-di-ora.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Vino</TIPO>\
//             <NOME>SOAVE DOC COLLI SCALIGERI CASTELCERINO</NOME>\
//             <PREZZO>25</PREZZO>\
//             <IMMAGINE>https://s.tannico.it/media/catalog/product/cache/1/thumbnail/0dc2d03fe217f8c83829496872af24a0/c/a/castenocerino_2_1_1_1_1_1.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Vino</TIPO>\
//             <NOME>CESANESE DEL PIGLIO SUPERIORE DOCG AGAPE</NOME>\
//             <PREZZO>20</PREZZO>\
//             <IMMAGINE>https://www.italiaqualityfood.com/14874-large_default/2013-agape-cesanese-piglio.jpg</IMMAGINE>\
//         </PIATTO>\
//         <PIATTO>\
//             <TIPO>Vino</TIPO>\
//             <NOME>ETNA ROSSO DOC</NOME>\
//             <PREZZO>32</PREZZO>\
//             <IMMAGINE>https://www.enotecalongo.it/wp-content/uploads/2020/11/etnarosso-tornatore.jpg</IMMAGINE>\
//         </PIATTO>\
//     </LISTA_VINI>\
// </MENU>"
// const parsedXMLDocument= new DOMParser().parseFromString(stringaMenuXML, "text/xml");
// console.log(parsedXMLDocument)
/*CONVERTO LA STRINGA IN XML, IN QUESTO MODO NON SERVE L'UTILIZZO DI LIVE SERVER PER APRIRE I VARI FILE*/


/* ************************************************************************************************************** */

//MEDIA QUERY
function mediaQuery(x) 
{
    if (x.matches) 
    {
        screenSize="Mobile"
        bloccoCarrello=false; 
    } 
    else 
    {
        screenSize="PC"
    }
}
var x = window.matchMedia("(max-width: 850px)")
mediaQuery(x)
x.addListener(mediaQuery)

/* ************************************************************************************************************** */

/*IMPOSTO IL TIPO E LA PAGINA DA CUI E' ARRIVATA LA CHIAMATA;*/
function settaTipoePagina(tipologiaPiatto, divListaPiatto)
{
    tipologia=tipologiaPiatto;
    contenitoreListaPiatto=divListaPiatto; 
    document.getElementById(divListaPiatto).innerHTML="<img id='loader' src=\"https://i.gifer.com/ZZ5H.gif\">"
    if(tipologia=="cocktail")
    {
        estraiCocktail()
    }
    else
    {
        inviaRichiesta()
    }
}

/* ************************************************************************************************************** */

//COCKTAIL

function estraiCocktail()
{
    for(i=0; i<26; i++)
    {
        urlCocktail="https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+String.fromCharCode(codiceASCII+i)//CAMBIO LA LETTERA FINALE DELL'URL
            $.ajax({
                url: urlCocktail,
                type: 'GET',
                dataType: 'json',
                success: function(data)
                { 
                    
                    document.getElementById(contenitoreListaPiatto).style="height:auto"
                    $('#loader').hide();
                    fileJson=data
                    if(data.drinks!=null)
                    creaListaCocktai(fileJson.drinks[0]);
                    document.getElementsByClassName("footer")[0].style.cssText="display:block"
                },
                beforeSend:function()
                {
                    document.getElementsByClassName("footer")[0].style.cssText="display:none"
                    $('#loader').show();
                    
                },
                error:function(){
                    document.getElementById(contenitoreListaPiatto).style.cssText="height:80vh"
                    console.log("errore")
                }
        })
    }
}

//FUNZIONE CHE RIORDINA L'ARRAY IN ORDINE ALFABETICO
function comparaCocktail(a, b) 
{
    nomeCocktaila=a.strDrink
    nomeCocktailb=b.strDrink
    if (nomeCocktailb>nomeCocktaila) 
    {
      return -1;
    }
    if (nomeCocktailb<nomeCocktaila) 
    {
      return 1;
    }
    return 0;
}

//RIEMPO UN ARRAY CON TUTTI I COCKTAIL 
let listaCocktail=[];
function creaListaCocktai(cocktail){
        listaCocktail.push(cocktail);
        if(listaCocktail.length==24)
        {
            listaCocktail.sort(comparaCocktail) 
            /*RIORDINO L'ARRAY COSI CHE SIA STAMPATO SEMPRE NELLO STESSO ORDINE, PERCHE' L'ARRAY NON VIENE RIEMPITO SEMPRE
            ALLO STESSO MODO, ESSENDO UNA CHIAMATA ASINCRONA*/
            creaTabellaPerTipo() 
        }
}

/* ************************************************************************************************************** */

// PRENDO I DATI DAL FILE "MENU.XML"
function inviaRichiesta(){
    $.ajax({
        url: "../../xml/menu.xml",
        type: 'GET',
        dataType: 'xml',
        success: function(data)
        { 
            $('#loader').hide();
            fileXML=data
            creaTabellaPerTipo()
        },
        beforeSend:function()
        {
            $('#loader').show();
        },
        error:function(){
            document.getElementById(contenitoreListaPiatto).style.cssText="height:80vh"
            console.log("errore")
        }
    })

}


// CARRELLO
function aggiungiAlCarrello2(tipo, nome, ingredienti, prezzo, immagine, NimgAnimazione){
    let i; 
    let trovato=false;
    if(!bloccoCarrello)
    {
        if(localStorage.getItem("carrello")==null)
        {
            localStorage.setItem("carrello", "[]")
        }
        carrello = JSON.parse(localStorage.getItem("carrello"))

        for(i=0; i<carrello.length; i++)
        {
            if(carrello[i].nomePiatto==nome)
            {   
                carrello[i].contatore++;
                localStorage.setItem("carrello", JSON.stringify(carrello));
                trovato=true;
                break;
            }
        }
        if(trovato==false)
        {
            carrello.push({tipoPiatto: tipo, nomePiatto: nome, ingredientiPiatto: ingredienti, prezzoPiatto: prezzo, immaginePiatto: immagine, modifiche:"", contatore:1})
            localStorage.setItem("carrello", JSON.stringify(carrello));  
            
        }
        if(screenSize=="PC")
        // $("#imgAnimazioneAggiunta"+NimgAnimazione).stop(false, true);
        {
            bloccoCarrello=true;
            $("#imgAnimazioneAggiunta"+NimgAnimazione).animate({'opacity':'1', 'top':'-17'}, 1000, function(){

                $(this).animate({'opacity':'0'}, 1000, function(){$(this).css({'top':'0'})});
                bloccoCarrello=false;     //non permetto di schiacciare più volte il tasto in poco temppo
            });
        }
        nAcquisti=Number(localStorage.getItem("nAcquisti"))+1; 
        localStorage.setItem("nAcquisti", nAcquisti)
        stampaNAcquisti();
    }
}

// creazione della lista dei piatti
//FUNZIONE CHE SCORRE TUTTO L'XML E VA A CONFRONTARE IL TAG "TIPO" CON LA TIPOLOGIA DI PIATTO SETTATA DALLA FUNZIONE PER POI STAMPARE I PIATTI
function creaTabellaPerTipo(){
    contatore=0; 
    if(tipologia=="Primo" || tipologia=="Secondo" || tipologia=="Dolce" || tipologia=="Vino")
    {
        arrayPiatti=fileXML.getElementsByTagName("PIATTO")
    }
    else
    {
        arrayPiatti=listaCocktail;
    }
    tabella="<table id='tabellaLista'>";
    for (let i = 0; i <arrayPiatti.length; i++) 
    {
        if(tipologia=="Primo" || tipologia=="Secondo" || tipologia=="Dolce" || tipologia=="Vino")
        {
            tipo=arrayPiatti[i].getElementsByTagName("TIPO")[0].childNodes[0].nodeValue
            if(tipo==tipologia)
            {
                nome=arrayPiatti[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue
                if(tipo!=="Vino")
                    ingredienti=arrayPiatti[i].getElementsByTagName("INGREDIENTI")[0].childNodes[0].nodeValue
                //I VINI NON HANNO INGREDIENTI
                prezzo=arrayPiatti[i].getElementsByTagName("PREZZO")[0].childNodes[0].nodeValue
                immagine=arrayPiatti[i].getElementsByTagName("IMMAGINE")[0].childNodes[0].nodeValue
            }
        }
        else
        {
            
            tipo="cocktail"
            if(tipo==tipologia)
            {
                nome=listaCocktail[i].strDrink;
                ingredienti=listaCocktail[i].strIngredient1
                prezzoPerIngrediente=3;
                prezzo=prezzoPerIngrediente; 
                for(k=2; k<10; k++)
                {
                    let variabileIngredienti="strIngredient"+k;
                    if(listaCocktail[i][variabileIngredienti]!=null)
                    {
                        prezzo+=prezzoPerIngrediente;
                        ingredienti+=", "+listaCocktail[i][variabileIngredienti]
                    }
                }
                immagine=listaCocktail[i].strDrinkThumb;
            }  
        }
        if(tipo==tipologia)
        {
            contatore++; 
            tabella+="<tr class='divisoreOrizzontale'>  </tr>"
            tabella += "<tr class='trCarrelloEPiatti'>";
            if(contatore%2==0)
            {
                tabella+="<td class='tdCarrelloEPiatti cellaImg'> <img class='imgPiatti' src='"+ immagine +"'></td>"
                tabella+="<td class='tdCarrelloEPiatti separatoreListaPiatti'></td>"          
            }
            tabella+="\
            <td class='tdCarrelloEPiatti'>\
                <h2>"+ nome +"</h2>"
                if(tipo!=="Vino")
                    tabella+="<p>"+ ingredienti+"</p>"
            tabella+="</td>"
            if(contatore%2!=0)
            {
                tabella+="<td class='tdCarrelloEPiatti separatoreListaPiatti'></td>"
                tabella+="<td class='tdCarrelloEPiatti cellaImg'> <img class='imgPiatti' src='"+ immagine +"'></td>"
            }
            tabella+="\
            <td class='tdCarrelloEPiatti cellaAggiungiListaPiatti'>\
                <div class='divMobile'>\
                    <h2>"+ nome +"</h2>\
                    <img class='imgPiatti' src='"+ immagine +"'>"
                    if(tipo!=="Vino")
                        tabella+="\
                    <p>"+ ingredienti+"</p>"
            tabella+="\
                </div>\
                <span id='imgAnimazioneAggiunta"+i+"' class='fa-solid fa-1'></span><br>"
            tabella+="\
                <span class='fa-solid fa-plus fa-xl' onclick=\"aggiungiAlCarrello2('"+tipo+"', '"+nome+"','"+ingredienti+"', '"+prezzo+"', '"+immagine+"', '"+i+"')\" title = \"Aggiungi al carrello\" span></span><br>\
                <p>"+prezzo+"€</p>\
            </td>"
            tabella+="</tr>"
        }
    }
    tabella+="</table>"
    document.getElementById(contenitoreListaPiatto).innerHTML= tabella;
}

/* ************************************************************************************************************** */
stampaNAcquisti()//chiamo la funzione che stampa nella navbar il numero degli acquisti. 