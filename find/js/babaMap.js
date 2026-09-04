//leaflet-marker-icon leaflet-zoom-animated leaflet-interactive
var startDistance = 0.00595219899384;
alert("Hello dear Baba, \nNow your getting to the moving part, or better said, the following part.\n You will follow the Niffler to there spots of treasure, follow them all and the reward will be high.\n Good luck!")

var map = L.map('map').setView([52.141484, 5.394788], 16 );
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
// const buttonQuest = document.getElementById("quest");
// buttonQuest.addEventListener("click", startMoving);


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

// Latitude : 52.142311 | Longitude : 5.39929

var imageUrl = "footstepLUp.png";
var imageUrlRight = "footstepRightUp.png";

var coordinates = L.latLngBounds([52.140728 , 5.39975], [52.140821 , 5.39966]);
var coordinatesRight = L.latLngBounds([52.140722 ,  5.399809], [52.140856 , 5.399912]);
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
    .setLatLng([52.140749  ,5.399297])
    .setContent("Niffler")
    .openOn(map);


let loop = 1;
let rightFoot = document.querySelector(".right-foot");
let leftFoot = document.querySelector(".left-foot");
let objectNiffler = document.querySelector(".niffler");
objectNiffler.id = "niffler"
rightFoot.id = "right";
leftFoot.id = "left";
let right = document.getElementById("right");
let left = document.getElementById("left");
let niffler = document.getElementById("niffler")
// objectNiffler.classList.toggle("niffler-action");
function hide() {
  left.style.display = "none";
  right.style.display = "none";
  objectNiffler.classList.toggle("hide");
}
function move() {
  right.style.marginLeft = (11.667  *  loop) + "px";
  right.style.marginTop = (-30 * loop) + "px";
}
function move2() {
    left.style.marginLeft = (11.667  * loop) + "px";
    left.style.marginTop = (-30 * loop) + "px";
}
function move3() {
    niffler.style.marginLeft = (11.667 * loop) + "px";
    niffler.style.marginBottom = (30 * loop) + "px";
    loop++;
}
function startMoving() {
  console.log("start moving")
  var j = setInterval(move3, 1000);

  var i = setInterval(move, 1250);
  var k = setInterval(move2, 1500);
  setTimeout(function() { clearInterval(i); }, 16500);
  setTimeout(function() { clearInterval(j); }, 16500);
  setTimeout(function() { clearInterval(k); }, 16500);
  setTimeout(function() { hide() }, 16500);
  // objectNiffler.classList.toggle("niffler-action");

}
const buttonQuest = document.getElementById("quest");
buttonQuest.addEventListener("click", startMoving);
const mapElement = document.getElementById("map");
    // margin-left: 75px;
    // rotate: -5.4deg;
let answerOne = document.getElementById("one");
let answer = document.getElementById("answer");
let answerTwo = document.getElementById("two");
let label = document.getElementById("firstL");
let labelTwo = document.getElementById("secondL");
let buttonTwo = document.getElementById("answerTwo")
answer.addEventListener("click", function() {
  if(answerOne.value == "Baba") {
    alert("Correct");
    answer.style.display = "none";
    answerOne.style.display = "none";
    label.style.display = "none";
    labelTwo.style.display = "block";
    answerTwo.style.display = "block";
    buttonTwo.style.display = "block";
  }
  else {
      alert("Wrong, try again")
  }
})

if(buttonTwo) {
  buttonTwo.addEventListener("click", function() {
    if(answerTwo.value == "Parijs" || answerTwo.value == "Paris") {
      alert("Correct");
      buttonQuest.style.display ="block";
      answerTwo.style.display = "none";
      buttonTwo.style.display = "none";
      labelTwo.style.display = "none";

    }
    else {
      alert("Wrong, try again")
    }
  })
}