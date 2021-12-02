var startBtn = document.getElementById(launchButton);

function launch() {}



function issdata() {

fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
.then(function (response) {
    return response.json();
})
.then(function(data) {
    console.log('iss data', data);
})
}

issdata()



<<<<<<< HEAD
L.mapbox.accessToken = 'pk.eyJ1IjoiaGFra2kxODEwIiwiYSI6ImNrd21reTdzajJjdjIyeG5zanY4M2FwN3UifQ._Y_FFA1j6916TXqVusZ6Lg';
    var map = L.map('map',{
        center: [30, 0],
        zoom: 3

    });
    
    L.tileLayer(
        'https://api.mapbox.com/styles/v1/hakki1810/ckwmmq08p69z514oclunhvyfu/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGFra2kxODEwIiwiYSI6ImNrd21reTdzajJjdjIyeG5zanY4M2FwN3UifQ._Y_FFA1j6916TXqVusZ6Lg', {
            tileSize: 512,
            zoomOffset: -1,
            attribution: '© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var circle = L.circle([43.45656565, -69.682651984], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500000
    
}).addTo(map);
var popup = L.popup()
    .setLatLng([23.654, -0.09])
    .setContent("You are Here Heran!")
    .openOn(map);
=======
>>>>>>> 377e0aa (reorganised folder structure)
