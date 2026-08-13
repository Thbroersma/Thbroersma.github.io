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
// Latitude : 52.142311 | Longitude : 5.39929

var imageUrl = "footstep.png";
var imageUrlRight = "footstepRight.png";

var coordinates = L.latLngBounds([52.14233006663446, 5.399290711598951], [52.14236883812015, 5.399411445488624]);
var coordinatesRight = L.latLngBounds([52.142311, 5.39929], [52.142264, 5.399413]);
var imageOverlay2 = L.imageOverlay(imageUrlRight, coordinatesRight, {
  className: "right-foot",
});
var imageOverlay = L.imageOverlay(imageUrl, coordinates, {
  className: "left-foot",
});


imageOverlay.addTo(map);
imageOverlay2.addTo(map);
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
    var greenIcon = L.icon({
        iconUrl: 'leaf-green.png',
        iconSize:     [60, 40], // size of the icon
    });

    L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
    var marker = L.marker([latitude, longitude], {icon:avatarIcon});
    marker.addTo(map);
    }
  /*
  setInterval()	Runs a function repeatedly.
clearTimeout()	Cancels a timeout.
*/
let margin = 2;
let loop = 1;
let rightFoot = document.querySelector(".right-foot");
let leftFoot = document.querySelector(".left-foot");
setInterval(move(), 5000);
function move() {
  leftFoot.style.marginLeft = (margin * loop) + "px";
  rightFoot.style.marginLeft = (margin * loop) + "px";

  loop++;

}
clearInterval();