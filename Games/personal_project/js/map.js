import * as object from "./pokemons/water/generalPoints.js";
import * as general from "./pokemons/general/generalNormal.js";
const pokemonCount = 151;
const pokemonTypes = [
    "water", "fire", "grass", "normal", "poison", "flying", 
    "fighting", "ground", "rock", "bug", "psychic", "ice", 
    "ghost", "steel", "fairy"
]
var infoLat = document.getElementById('latitude');
var infoLon = document.getElementById('longitude');
var pokedex = {};
var starters = [1, 4, 7, 25];
var grassGeneral = [10, 13, 16, 19, 21];
var grassBugLessCommon = [43, 46, 48, 69, 102];
var waterGeneral = [60, 118, 120];
var waterWater = [72, 86, 114, 116, 129];
var waterBeach = [90, 98];
var waterRock = [138, 140]
var waterRare = [54];
var waterRare = [131];
var underWaterFull = 147;
var poisonMiddle = [23, 29, 32, 109];
var posionRare = [88];
var electricLessRare = [81, 100];
var electricRare = [125, 145];
var groundMiddle = [27, 50, 74];
var groundRare = [95, 104, 111];
var fireMiddle = [37, 58];
var fireRare = [ 77, 126];
var fairyMiddle = [35, 39];
var middleAirMix = [41];
var rareAirMix = [123, 149];
var superRareAirMix = [142, 144, 145, 146, 149];
var normalMiddleRare = [52, 83, 84, 108, 113, 115, 132, 133];
var normalRare = [123, 127, 128, 143];
var impossible = [150, 151];
var fightingNormal = [56];
var fightingMiddle = [66];
var fightingMiddleRare = [106];

var ghostNormal = [92];
var psychicMiddle = [63];
var psychicMiddleRare = [79, 96];
var psychicRare = [122, 124];

let waterTypeNames = [];
let waterTypeImg = [];
let waterTypeID = [];
let grassTypeNames = [];
let grassTypeImg = [];
let grassTypeID = [];
let waterPoints1 = [object.waterGeneral1, object.waterGeneral3, object.waterGeneral4];
let waterPoints2 = [object.waterGeneral5, object.waterGeneral6, object.waterGeneral7];
var waterRandom = Math.floor(Math.random() * 3);
var waterPointRandom = Math.floor(Math.random() * 3);
var waterPointRandom2 = Math.floor(Math.random() * 3);
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
//leaflet-marker-icon leaflet-zoom-animated leaflet-interactive
window.onload = async function() {
    for(let i = 1; i <= pokemonCount; i++) {

        await getPokemon(i);

        let pokemonID = pokedex[i]["id"];
        let pokemonType = pokedex[i]["types"];
        let pokemonName = pokedex[i]["name"];
        let pokemonImg = pokedex[i]["img"];
        

        for (let i = 0; i < pokemonType.length; i++) {
            // pokemon types wordt aangemaakt en toevoegd aan een span object
            let type = document.createElement("span");
            type.innerText = pokemonType[i]["type"]["name"];
            // 
        }
        for (let x = 0; x < 5; x++) {
            var grassRandom = Math.floor(Math.random() * 5);
            if(i == grassGeneral[grassRandom]) {
                grassTypeNames.push(pokemonName);
                grassTypeImg.push(pokemonImg);
                grassTypeID.push(pokemonID);
            }
        }
            //filter pokemon on water type
            // maak hier een variatie waardoor er 2 soorten water type 
            // pokemons naar voren komen die je op 2 plekken kunt zetten
        for (let x = 0; x < 3; x++) {
            var waterRandom = Math.floor(Math.random() * 3);
            if(i == waterGeneral[waterRandom]) {
                waterTypeNames.push(pokemonName);
                waterTypeImg.push(pokemonImg);
                waterTypeID.push(pokemonID);

            }
        }
        for (let x = 0; x < 16; x++) {
            var lessRandom = Math.floor(Math.random() * 10);
            if(i == grassBugLessCommon[lessRandom]) {
                grassTypeLessNames.push(pokemonName);
                grassTypeLessImg.push(pokemonImg);
                grassTypeLessID.push(pokemonID);

            }
        }
        
    }
    
    
    // Check of locatie navigator werkt (dat je locatie opgevraagd mag worden)
}

function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");
  const lat = document.querySelector("#latitude");
  const lon = document.querySelector("#longitude");
  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    lat.textContent = latitude;
    lon.textContent = longitude;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);

async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    // Here you get the url of the baisc information of the pokemon
    
    let res = await fetch(url);
    let pokemon = await res.json();
    // Here you fetch the information from the api link and put it in JSON format
    // console.log(pokemon);

    let pokemonId = pokemon["id"];
    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];

    
    
    pokedex[num] = {"id": pokemonId,"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType};

}
setInterval(getPosition, 10000)
// Haalt je locatie op en geeft locatie een icon
function getPosition() {
    var oldMarker = document.querySelector(".leaflet-marker-icon");
    // Hier wordt de oude icon verwijderd van de kaart
    if (oldMarker) {
        oldMarker.remove();
        const lat = document.querySelector("#latitude").innerHTML;
        const lon = document.querySelector("#longitude").innerHTML;
        var avatarIcon = L.icon({
        iconUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
        iconSize: [60, 60],
        className: "avatar-icon",
    });
    var marker = L.marker([lat, lon], {icon:avatarIcon});
    marker.addTo(map);
    }
    else {
    const lat = document.querySelector("#latitude").innerHTML;
    const lon = document.querySelector("#longitude").innerHTML;
    var avatarIcon = L.icon({
        iconUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
        iconSize: [60, 60],
        className: "avatar-icon",
    });
    var marker = L.marker([lat, lon], {icon:avatarIcon});
    marker.addTo(map);
}
}