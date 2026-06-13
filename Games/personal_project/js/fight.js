const actionLink = document.querySelector(".action");
const actionList = document.querySelector(".actions");
const pokemonPlace = document.querySelector(".pokemon-img");
const list = document.querySelector(".list");
let pokemonList = document.querySelector(".pokemon-list");
const actionOne = document.querySelector(".action-one");
const testPokemons = localStorage.setItem;

var pokedex = [];
var pokemonDex = [];
const pokemonID = document.getElementById("pokemon-info");
const ID = pokemonID.innerHTML;

const getRandomNumber = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
}
let randomLevel = getRandomNumber(3, 20)
await fetchPokemon(ID);

const pokemonNames = document.getElementById("name-title");
const pokemonLevel = document.getElementById("level-title");
const pokemonHP = document.getElementById("hp-title");
const type = document.getElementById("type-title");
let pokemonType = pokedex[ID]["types"];
let object = [];
pokemonNames.innerHTML = pokedex[ID]["name"];
pokemonLevel.innerHTML += randomLevel;
for (let i = 0; i < pokemonType.length; i++) {
    // pokemon types wordt aangemaakt en toevoegd aan een span object
    object += pokemonType[i]["type"]["name"] + " ";
    type.innerHTML += pokemonType[i]["type"]["name"] + " ";
    console.log(object)
}
if (actionLink) {
    actionLink.addEventListener('click', function() {
        document.querySelector(".boardItem").style.display = "none";
        document.querySelector(".boardItem2").style.display = "none";
        document.querySelector(".boardItem3").style.display = "none";
        document.querySelector(".boardItem4").style.display = "none";

        actionList.style.display = "block";
    })
}

if (list) {
    list.addEventListener('click', function() {
        document.querySelector(".boardItem").style.display = "none";
        document.querySelector(".boardItem2").style.display = "none";
        document.querySelector(".boardItem3").style.display = "none";
        document.querySelector(".boardItem4").style.display = "none";


    })
}

async function fetchPokemon(num) {
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