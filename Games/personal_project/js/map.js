import * as object from "./pokemons/water/generalPoints.js";
import * as general from "./pokemons/general/generalNormal.js";
import image from "../img/avatar.png"
const pokemonCount = 151;
const pokemonTypes = [
    "water", "fire", "grass", "normal", "poison", "flying", 
    "fighting", "ground", "rock", "bug", "psychic", "ice", 
    "ghost", "steel", "fairy"
]
var pokedex = {};
var avatarImg = "../";
var starters = [1, 4, 7];
var grassGeneral = [10, 13, 16, 19, 21];
var grassBugLessCommon = [43, 46, 48, 69, 102];
var waterGeneral = [60, 118, 120];
var waterWater = [72, 86, 116, 129];
var waterBeach = [90, 98, 138];
var waterRare = [131];
var underWaterFull = 147;
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
console.log(waterPointRandom);
console.log(waterPointRandom2);

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
        
    }
    console.log(waterTypeNames);
    console.log(grassTypeNames);

    // Check of locatie navigator werkt (dat je locatie opgevraagd mag worden)
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            // De functie voor het krijgen van je latitude en longitude locatie
            // van je huidige locatie
            var lat = position.coords.latitude + 0.01575908932086;
            var lon = position.coords.longitude - 0.01575908932086;
            var latCookie = position.coords.latitude;
            var lonCookie = position.coords.longitude;
            document.getElementById('coordinates').textContent = 'Amersfoort';
            // functie voor het open van de openstreetmap op je huidige locatie
            var map = L.map('map').setView({lat, lon},15);
            var avatarIcon = L.icon({
                icon: image,
                iconSize: [60, 60],
            });
            // Zorg nog voor het juist laden van de afbeelding
            // Kijk naar een setInterval voor get coordinaten
            var avatar = L.marker([latCookie, lonCookie], {icon: avatarIcon}).addTo(map);
            // Tile layers 
            var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                maxZoom: 17,
                attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            });
            OpenTopoMap.addTo(map);

            var baseMaps = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,

            });
            baseMaps.addTo(map);

            // test om pokemon-image als marker toe te voegen
            var pokemonObject = document.getElementById("pokemon-string").innerHTML;
            var pokemon = document.getElementById("test-name").innerHTML
            var pokemonImage = document.getElementById("test-img").innerHTML;

            // pokemonIcon object aanamken
            var pokemonIcon = L.icon({
                iconUrl: pokemonImage,
                iconSize: [80, 80],
            });

            // functie marker toevoegen - met het pokemonIcon object
            var singleMarker = L.marker([52.71939137460275, 6.557718544639846], {icon: pokemonIcon}).bindPopup(pokemon).addTo(map);
            
            
            // Hiermee wordt een layer object aangemaakt waarbinnen je kunt kiezen 
            // in het soort openstreetmap type
            var baseLayers = {
                "OpenTopoMap": OpenTopoMap,
                "OpenStreetMap": baseMaps

            };
            // Hier wordt binnen het layer object ook een checkbox toegevoegd
            // voor de markers die je wel of niet wilt zien
            // Een filter hierin volgt nader
            var overlays = {
                "Fire": singleMarker,
            };

        L.control.layers(baseLayers, overlays).addTo(map);        
        
        // getPokemonSelected
        let randomWater = Math.floor(Math.random() * waterTypeNames.length);
        let randomWater2 = Math.floor(Math.random() * waterTypeNames.length);
        var grassRandom = Math.floor(Math.random() * grassTypeNames.length);

        let randomTwo = Math.floor(Math.random() * grassTypeNames.length);

        var objectWaterIcon = [];
        for (var i = 0; i < waterTypeImg.length; i++) {
            objectWaterIcon[i] = L.icon({
                iconUrl: waterTypeImg[i],
                iconSize: [60, 60],
            });
        }
        var objectGeneralIcon = [];
        for (var i = 0; i < grassTypeImg.length; i++) {
            objectGeneralIcon[i] = L.icon({
                iconUrl: grassTypeImg[i],
                iconSize: [60, 60],
            });
        }
        console.log(objectGeneralIcon);
        // GEOJSON
        // Water pokemon
        L.geoJSON(waterPoints1[waterPointRandom], {
            // hier wordt een marker toegevoegd aan de geoJson gemaakte locatie
            pointToLayer: function (feature, latIng) {
                return L.marker(latIng, {icon:objectWaterIcon[randomWater] });
            },
        onEachFeature: function (feature, layer) {
            const name = feature.properties.name || waterTypeNames[randomWater];
            const info = feature.properties.popupContent || "fight"

            layer.bindPopup(`<strong>${name}</strong><br><a href="/fight/${waterTypeID[randomWater]}">${info}</a>`);
        }
        }).addTo(map);
        // water pokemon 2
        L.geoJSON(waterPoints2[waterPointRandom2], {
            // hier wordt een marker toegevoegd aan de geoJson gemaakte locatie
            pointToLayer: function (feature, latIng) {
                return L.marker(latIng, {icon:objectWaterIcon[randomWater2] });
            },
        onEachFeature: function (feature, layer) {
            const name = feature.properties.name || waterTypeNames[randomWater2];
            const info = feature.properties.popupContent || "fight"

            layer.bindPopup(`<strong>${name}</strong><br><a href="/fight/${waterTypeID[randomWater2]}">${info}</a>`);
        }
        }).addTo(map);
        // Grass pokemon
        for (let w = 0; w < 3; w++) {
            L.geoJSON(general.listOne[waterRandom], {
            // hier wordt een marker toegevoegd aan de geoJson gemaakte locatie
            pointToLayer: function (feature, latIng) {
                return L.marker(latIng, {icon:objectGeneralIcon[randomTwo] });
            },
            onEachFeature: function (feature, layer) {
                const name = feature.properties.name || grassTypeNames[randomTwo];
                const info = feature.properties.popupContent || "fight"
                layer.bindPopup(`<strong>${name}</strong><br><a href="/fight/${grassTypeID[randomTwo]}">${info}</a>`);
            }
            }).addTo(map);
            L.geoJSON(general.listTwo[waterRandom], {
            // hier wordt een marker toegevoegd aan de geoJson gemaakte locatie
            pointToLayer: function (feature, latIng) {
                return L.marker(latIng, {icon:objectGeneralIcon[grassRandom] });
            },
            onEachFeature: function (feature, layer) {
                const name = feature.properties.name || grassTypeNames[grassRandom];
                const info = feature.properties.popupContent || "fight"
                layer.bindPopup(`<strong>${name}</strong><br><a href="/fight/${grassTypeID[grassRandom]}">${info}</a>`);
            }
            }).addTo(map);
        }
        // L.geoJSON(object.waterGeneral2, {
        //     // hier wordt een marker toegevoegd aan de geoJson gemaakte locatie
        //     pointToLayer: function (feature, latIng) {
        //         return L.marker(latIng, {icon:objectGeneralIcon[randomTwo] });
        //     },
        // onEachFeature: function (feature, layer) {
        //     const name = feature.properties.name || grassTypeNames[randomTwo];
        //     const info = feature.properties.popupContent || "fight"
        //     layer.bindPopup(`<strong>${name}</strong><br><a href="/fight">${info}</a>`);
        // }
        // }).addTo(map);
    
    })    
    } else {
        alert("Geolocatiion not supported by this browser")
    }
}
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
