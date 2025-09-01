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