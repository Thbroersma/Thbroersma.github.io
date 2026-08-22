//leaflet-marker-icon leaflet-zoom-animated leaflet-interactive
var startDistance = 0.00595219899384;
var map = L.map('map').setView([52.144768 , 5.39575], 16 );
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 16.9,
    minZoom:16.9,
    zoom: 16.9,
    zoomControl: false,
    scrollWheelZoom: false,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
OpenTopoMap.addTo(map);
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();

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
map.setZoom(16.294718618810897);



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

var imageUrl = "footstepLToLeft.png";
var imageUrlRight = "footstepRToLeft.png";

var coordinates = L.latLngBounds([52.144403 , 5.401366], [52.144551, 5.401005]);
var coordinatesRight = L.latLngBounds([52.144885, 5.401645], [52.145055, 5.401221]);
// 52.144489  -  5.401076/ Latitude : 52.144605 | Longitude : 5.401605
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

var popup = L.popup({
      className: "niffler",
    })
    .setLatLng([52.145068, 5.401591])
    .setContent("Niffler")
    .openOn(map);


let loop = 1;
let rightFoot = document.querySelector(".right-foot");
let leftFoot = document.querySelector(".left-foot");

rightFoot.id = "right";
leftFoot.id = "left";
let right = document.getElementById("right");
let left = document.getElementById("left");

const objectNiffler = document.querySelector(".niffler");

function hide() {
  left.style.display = "none";
  right.style.display = "none";
  objectNiffler.classList.add("hide");
}
function move() {
  right.style.marginLeft = (-57.5 *  loop) + "px";
  right.style.marginRight = (-8.5 * loop) + "px"
}
function move2() {
    left.style.marginLeft = (-57.5 * loop) + "px";
    left.style.marginRight = (-8.5 * loop) + "px"
    loop++;

}
function startMoving() {
  console.log("start moving")
  var i = setInterval(move, 750);
  var k = setInterval(move2, 1250);
  setTimeout(function() { clearInterval(i); }, 25000);
  setTimeout(function() { clearInterval(k); }, 25000);
  setTimeout(function() { hide() }, 25000);
  objectNiffler.classList.add("niffler-action");

}
const buttonQuest = document.getElementById("quest");
buttonQuest.addEventListener("click", startMoving);

    // margin-left: 75px;
    // rotate: -5.4deg;