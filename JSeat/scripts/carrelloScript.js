
let contatoreCarrello=0; 
tabellaCarrello="<table id='tabellaCarrello'>";
prezzoTotale=0;
let nRighe=0;
nAcquisti=0; 
let screenSize
let carrello = JSON.parse(localStorage.getItem("carrello"));
creaListaCarrello2()

// CREA LA LISTA DEL CARRELLO


function creaListaCarrello2(){

    for(i=0; i<carrello.length; i++)
    {
        prezzoTotale+=Number(carrello[i].prezzoPiatto)*Number(carrello[i].contatore)
        // if(i!=0)
            // tabellaCarrello+="<tr class='divisoreOrizzontale'><td colspan='3'></td></tr>"
        tabellaCarrello+= "\
        <tr class=\"trCarrelloEPiatti\">\
            <td class=\"tdCarrelloEPiatti tdAumentDiminuisci\">\
                <div class='divMobile'>\
                    <h2>"+ carrello[i].nomePiatto +"</h2>\
                        <img class='imgPiatti' src='"+ carrello[i].immaginePiatto +"'>"
                    if(carrello[i].tipoPiatto!=="Vino")
                    tabellaCarrello+="<p>"+ carrello[i].ingredientiPiatto+"</p>"
                            tabellaCarrello+="\
                </div>\
                <div class='contenitoreContatoreProdotto'>\
                    <span class='fa-solid fa-square-plus fa-xl' onclick=\"aumentaContatore(this)\"></span>    \
                    <div class='pNProdotti'>"+carrello[i].contatore+"</div>\
                    <span class='fa-solid fa-square-minus fa-xl' onclick=\"eliminaDalCarrello(this)\"></span>    \
                </div>\
            </td>"
        for(j=0; j<carrello[i].contatore; j++)
        {
            nAcquisti++;
        }
        nAcquisti
        tabellaCarrello+="<td class='tdCarrelloEPiatti cellaImg'> <img class='imgPiatti' src='"+ carrello[i].immaginePiatto +"'></td>"
        
        tabellaCarrello+="<td class='tdCarrelloEPiatti separatoreListaPiatti'></td>"
        tabellaCarrello+="\
        <td class='tdCarrelloEPiatti IngredientiPC'>\
                <h2>"+ carrello[i].nomePiatto +"</h2>"
                
        if(carrello[i].tipoPiatto!=="Vino")
            tabellaCarrello+="\
                    <p>"+ carrello[i].ingredientiPiatto+"</p>"
        tabellaCarrello+="</td>"

        
        tabellaCarrello+="</tr><br>"
        
        nRighe++;
    }
    tabellaCarrello+="</table>";


    document.getElementById("conteniListaCarrello").innerHTML=tabellaCarrello;
    aggiungiAlLocalStorage()

}


// ELIMINA PIATTO DA CARRELLO
let posIncarrello
function eliminaDalCarrello(BottoneMeno)
{
    posIncarrello=Number(BottoneMeno.parentNode.parentNode.parentNode.rowIndex); 
    //L'INDIGE DELLA RIGA E' UGUALE ALL'INDICE NEL CARRELLO 
    prezzoTotale-=Number(carrello[posIncarrello].prezzoPiatto);
    if(carrello[posIncarrello].contatore==1)
    {
        carrello.splice(posIncarrello, 1)
        localStorage.setItem("carrello", JSON.stringify(carrello));
        document.getElementById("tabellaCarrello").deleteRow(posIncarrello);
    }
    else
    {
        carrello[posIncarrello].contatore--; 
        localStorage.setItem("carrello", JSON.stringify(carrello));
        document.getElementsByClassName("pNProdotti")[posIncarrello].innerHTML=carrello[posIncarrello].contatore;
    }
    nAcquisti--;    
    aggiungiAlLocalStorage()
}

function aggiungiAlLocalStorage() // ho creato questa funzione per non riscrivere ogni volta questo pezzo di codice
{
    localStorage.setItem("PrezzoTotale", prezzoTotale);
    localStorage.setItem("nAcquisti", nAcquisti);
    stampaPrezzoTotale()
    stampaNAcquisti()
}



//AGGIUNGI AL CARRELLO
function aumentaContatore(addToCartBtn)
{
    posIncarrello=Number(addToCartBtn.parentNode.parentNode.parentNode.rowIndex);
    carrello[posIncarrello].contatore++; 
    prezzoTotale+=Number(carrello[posIncarrello].prezzoPiatto);
    localStorage.setItem("carrello", JSON.stringify(carrello));
    document.getElementsByClassName("pNProdotti")[posIncarrello].innerHTML=carrello[posIncarrello].contatore;
    nAcquisti++;    
    aggiungiAlLocalStorage()
}

//ORDINA
function popUpConfermaOrdine(){
    let nome = document.getElementById('inputNomePrenotazione').value;
    if(document.getElementById('contieniPrezzoTotale').innerHTML=='0€'){
        document.getElementById("popUpConfermaOrdine").innerHTML = "Non hai ordinato nulla";
    }
    else if(document.getElementById('inputDataPrenotazione').value=="")
    {
        document.getElementById("popUpConfermaOrdine").innerHTML = "Non hai inserito la data";
    }
    else if(!checkData())
    {
        document.getElementById("popUpConfermaOrdine").innerHTML ="Giorno non accettabile"
    }
    else{
        if(nome!=""){
            document.getElementById("popUpConfermaOrdine").innerHTML = "Conferma: <button class='conferma' onclick='rispostaConfermaOrdine(true)'>Sì</button>  <button class='conferma' onclick='rispostaConfermaOrdine(false)'>No</button>"
            document.getElementById("ordinaBtn").style.display="none";
        }
        else{
            document.getElementById("popUpConfermaOrdine").innerHTML = "Nome non inserito il nome";
        }
    }
}

function rispostaConfermaOrdine(risposta){
    if(risposta==true)
    {
        nRighe=0;
        nAcquisti=0; 
        prezzoTotale=0; 
        localStorage.setItem("carrello", "[]")
        aggiungiAlLocalStorage();
        tabella="";
        document.getElementById("conteniListaCarrello").innerHTML=tabella
        document.getElementById("conteniListaCarrello").innerHTML="<h1>Grazie per l'acquisto</h1>"
        document.getElementById("popUpConfermaOrdine").innerHTML = "";
        document.getElementById("inputDataPrenotazione").value=""
        document.getElementById("inputNomePrenotazione").value=""
    }
    else
    {
        document.getElementById("ordinaBtn").style.display="block";
        document.getElementById("prenotazioneSection").style.display="block";
        document.getElementById("popUpConfermaOrdine").innerHTML = "";
    }
}


let data=new Date(); //data corrente
let dataPrenotazionePerConfronto;
//Controllo data
function checkData(){
    dataPrenotazionePerConfronto=new Date(document.getElementById("inputDataPrenotazione").value)
    if(dataPrenotazionePerConfronto.getDay()==1 || data.valueOf()>dataPrenotazionePerConfronto.valueOf()) 
    //se la data è domenica (indicata dallo zero), oppure è minore di quella del giorno attuale
    //restituisce un numero di millisecondi dalla mezzanotte del 1 gennaio 1970 UTC.
    {
        document.getElementById("popUpConfermaOrdine").innerHTML ="Giorno non accettabile"
        return false;
    }
    else
    {
        document.getElementById("popUpConfermaOrdine").innerHTML =""
        return true;
    }
}

function stampaPrezzoTotale(){
    document.getElementById("contieniPrezzoTotale").innerHTML=localStorage.getItem("PrezzoTotale")+"€";
}
       
