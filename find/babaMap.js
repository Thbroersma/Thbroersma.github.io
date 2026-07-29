//leaflet-marker-icon leaflet-zoom-animated leaflet-interactive
var startDistance = 0.00595219899384;
var map = L.map('map').setView([52.15550, 5.38892],15);
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
OpenTopoMap.addTo(map);

var baseMaps = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,

});
baseMaps.addTo(map);
window.onload = async function() {
    geoFindMe();
    
    
    
    // Check of locatie navigator werkt (dat je locatie opgevraagd mag worden)
}
//Hiermee wordt een layer object aangemaakt waarbinnen je kunt kiezen 
// in het soort openstreetmap type
var baseLayers = {
    "OpenTopoMap": OpenTopoMap,
    "OpenStreetMap": baseMaps

};
// Hier wordt binnen het layer object ook een checkbox toegevoegd
// voor de markers die je wel of niet wilt zien
// Een filter hierin volgt nader


L.control.layers(baseLayers).addTo(map);


function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");
  const lat = document.querySelector("#latitude");
  const lon = document.querySelector("#longitude");
  mapLink.textContent = "";
    console.log("Go Find Me")
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    lat.textContent = latitude;
    lon.textContent = longitude;
    lat.classList.add("background");
    lon.classList.add("background");
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);

var imageUrl = "footstep.gif";
var coordinates = L.latLngBounds([52.142351, 5.399347], [52.142460, 5.399577])
var imageOverlay = L.imageOverlay(imageUrl, coordinates).addTo(map)
// getPosition();
// setInterval(showPokemon, 10000);
// Haalt je locatie op en geeft locatie een icon
function getPosition() {
    console.log("Get position")

    // Het ophalen van de html elementen voor de coordinaten plek
    const status = document.querySelector("#status");

 
    var avatarIcon = L.icon({
        iconUrl: "footstep.png",
        iconSize: [60, 60],
        className: "avatar-icon",
    });
    console.log(latitude + ", " + longitude);
    var marker = L.marker([latitude, longitude], {icon:avatarIcon});
    marker.addTo(map);
    }
