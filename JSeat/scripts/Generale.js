let prezzoTotale;
let nAcquisti;
if(!localStorage.getItem("nAcquisti"))
{
    localStorage.setItem("nAcquisti", 0)
}
if(!localStorage.getItem("carrello"))
{
    localStorage.setItem("carrello", '[]')
}
if(!localStorage.getItem("PrezzoTotale"))
{
    localStorage.setItem("PrezzoTotale", 0)
}

//SE NON SONO GIà PRESENTI AGGIUNGILI

//ABBIAMO MESSO LA NAVBAR E IL FOOTER IN UNA VARIABILE COSì CHE NEL MOMENTO IN CUI DECIDIAMO DI APPORTARE DELLE MODIFICHE
//DOBBIAMO FARLO UNA SOLA VOLTA
function generaNav()
{
    document.getElementById("navbar").innerHTML+="\
    <div class='bottone_menù'>\
        <span class='fas fa-bars'></span>\
    </div>\
    <div id='container_celle_navbar'>\
        <a class='cella_navbar' id='home_navbar' href='homePage.html'>Home</a>\
        <a class='cella_navbar' id='menuSpeciali_navbar' href='menuSpeciali.html'>Menù speciali</a>\
        <a class='cella_navbar' id='informazioni_navbar' href='informazioni.html'>Informazioni</a>\
    </div>\
    <div id='continitoreCarrello'>\
        <a class='fas fa-shopping-cart carrello' href='carrello.html'></a>\
        <div id='contieniNprodotti'></div>\
    </div>"
    
    document.getElementsByClassName("sidebar")[0].innerHTML="\
    <ul id='navNascosta'>\
        <li><a href='homePage.html'>Home</a></li>\
        <li><a href='menuSpeciali.html'>Menù speciali</a></li>\
        <li><a href='informazioni.html'>Informazioni</a></li>\
    </ul>\
    <div id='menù'>Menù</div>\
    <ul>\
        <li><a href='primi.html'>Primi</a></li>\
        <li><a href='secondi.html'>Secondi</a></li>\
        <li><a href='dolci.html'>Dolci</a></li>\
        <li><a href='cocktail.html'>Bevande</a></li>\
        <li><a href='vini.html'>Vini</a></li>\
    </ul>"
}

document.getElementsByClassName("footer")[0].innerHTML="\
    <div class='footer_left'>\
    <h3>JSeat</h3>\
    <p class='footer_links'>\
        <a href='homePage.html'>Home</a>\
        |\
        <a href='informazioni.html'>Informazioni</a>\
    </p>\
    <p class='footer_copyright'>\
        Copyright 2023 JSeat All rights reserved\
    </p>\
    </div>\
    <div class='footer_center'>\
    <div>\
        <span class='fa fa-map-marker'></span>\
        <p>\
            Luogo Provincia\
        </p>\
    </div>\
    <div>\
        <span class='fa fa-phone'></span>\
        <p>+39 338 793 3191</p>\
    </div>\
    <div>\
        <span class='fa fa-envelope'></span>\
        <p><a href='#'>jseat.info@gmail.com</a></p>\
    </div>\
    </div>\
    <div class='footer_right'>\
    <p class='about'>\
        <span>About the company</span>\
        JSeat è un bellissimo ristorante\
        dove ti sentirai come a casa.\
    </p>\
    <div class='footer_icons'>\
        <a href='#' class='fa fa-facebook'></a>\
        <a href='https://www.instagram.com/jseat_restaurant/' target='_blank' class='fa fa-instagram'></a>\
        <a href='#' class='fa fa-twitter'></a>\
    </div>\
    </div>"
 
        
// BARRA LATERALE 

$(document).ready(function(){
        $('.bottone_menù').click(function(){
            $(this).toggleClass("click");
        $('.sidebar').toggleClass("mostra");
    });
})


function stampaNAcquisti(){
    document.getElementById("contieniNprodotti").innerHTML=localStorage.getItem("nAcquisti");
}

