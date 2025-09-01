// CAROSELLO
let slides=document.querySelectorAll('.slide');
let btns=document.querySelectorAll('.btn');
let currentSlide=0; 
let repeat2;
let nSlides=5;
let i=0;

function manualNav(manual)
{
    slides.forEach((slide)=>
    {  //slide è un nome fittizio, poteva essere anche pippo (assume il valore di 1 slide dell'array)
        slide.classList.remove('active')
    })//rimuovo a tutte active
    document.getElementById("contenitoreCarosello").style.backgroundImage=slides[currentSlide].style.backgroundImage;
    btns.forEach((btn)=>
    {
            btn.classList.remove('active')
    })

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    i=manual;
    currentSlide=manual;
    repeat2=setTimeout(avanti2, 5000); 
}

function avanti2() {
        check=1;
        i++;
        if(i==nSlides)
        {
            i=0;
        }
        manualNav(i)
}
    btns.forEach((btn, i) => //la i tiene il conto
    {
        btn.addEventListener("click", ()=> {
            document.getElementById("contenitoreCarosello").style.backgroundImage=slides[currentSlide].style.backgroundImage;
            clearInterval(repeat2);       
            manualNav(i);
            
    })
})

// Mappa
var map = L.map('map').setView([44.6447968, 10.9215627], 19);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var indicatore = L.icon({
    iconUrl: '../immagini/indicatore.png',
    iconSize:     [60, 60], 
    iconAnchor:   [30, 59], 
    popupAnchor:  [-3, -76]
});
L.marker([44.6447968, 10.9215627], {icon: indicatore}).addTo(map);