const pokemonCount = 151;
var pokedex = {}; // {1 : {"name" : "bulbsaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."} }
let closing = document.getElementById("close-pokemon");
closing.addEventListener("click", closePokemon);
window.onload = async function() {
    // getPokemon(1);
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
        //<div id="1" class="pokemon-name">BULBASAUR</div>
        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase();
        pokemon.classList.add("pokemon-name");
        pokemon.addEventListener("click", updatePokemon);
        document.getElementById("pokemon-list").append(pokemon);
    }
    
    document.getElementById("pokemon-description").innerText = pokedex[1]["desc"];

    // get the pokemon in the box version in progress
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
        //<div id="1" class="pokemon-name">BULBASAUR</div>
        let pokemon = document.createElement("div");
        let pokemonInfo = document.createElement("div");

        pokemon.id = i;
        let pokemonName = document.createElement('p');
        pokemonName.classList.add("index-name");
        let pokemonID = this.document.createElement('b');
        let pokemonImg = document.createElement('img');
        pokemonImg.classList.add("pokemon-img");
        pokemonImg.src = pokedex[i]["img"];
        pokemon.appendChild(pokemonImg);
        pokemonName.innerText = pokedex[i]["name"];
        pokemonID.innerHTML = pokedex[i]["id"];
        pokemonInfo.appendChild(pokemonID);
        pokemonInfo.appendChild(pokemonName);
        pokemon.appendChild(pokemonInfo);
        // if(i<10) {
        //     pokemon.innerHTML ="<button class='pokemon-" + pokedex[i]['name'] + "'><img src='" +  pokedex[i]['img'] + "', class='pokemon-img'><p class='number'>000" + i.toString() + "</p>" + "<p class='pokemon-name-phone'> "  + pokedex[i]['name'] + "</p></button";

        // } else if(i<99) {
        //     pokemon.innerHTML ="<img src='" +  pokedex[i]['img'] + "', class='pokemon-img'><p class='number'>00" + i.toString() + "</p>" + "<p class='pokemon-name-phone'> "  + pokedex[i]['name'] + "</p>";

        // } else {
        //     pokemon.innerHTML ="<img src='" +  pokedex[i]['img'] + "', class='pokemon-img'><p class='number'>0" + i.toString() + "</p>" + "<p class='pokemon-name-phone'> "  + pokedex[i]['name'] + "</p>";

        // }
        pokemon.classList.add("pokemon-name-single", "pokemon-name-single-" + i);
        
        // let pokemonIMG = 
        //pokemon.add.img(src=pokedex[i]['sprites'])
        pokemon.addEventListener("click", showPokemon);
        document.getElementById("pokedex-list").append(pokemon);
    }
    console.log("It works I guess")
    console.log(pokedex);
    // start multiply div boxes

}
// old function
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
    // You put and selectElement to the data that you select from the api page. 
    // Like in name you get squirtle, but in sprites you put in a type of it. Since within sprites there are more options
    res = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await res.json();
    // Here you go to on other API link where there is other information/specifics you can get about the pokemon
    
    // console.log(pokemonDesc);\
    let levelUrl = pokemonDesc["evolution_chain"]["url"];
    pokemonDesc = pokemonDesc["flavor_text_entries"][9]["flavor_text"];
    res = await fetch(levelUrl);
    let pokemonLevel = await res.json();
    let levelStart = pokemonLevel["chain"]["evolves_to"][0];
    // Within this like, you get the descriptions in 'flavor_text_entries'. Where there are different description about the pokemon, plus in different languages.
    
    pokedex[num] = {"id": pokemonId,"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType, "desc" : pokemonDesc, "level" : levelStart};

}
function showPokemon() {
    let box = document.getElementById("pokemon-box");
    box.classList.add("pokemon-boxing");
    let name = document.getElementById("pokemon-title")
    name.innerHTML = pokedex[this.id]["name"];
    let image = document.querySelector("#pokedex-img");
    image.src = pokedex[this.id]["img"];
    let description = document.querySelector(".pokedex-description");
    description.innerHTML = pokedex[this.id]['desc'];
    
    // types 
    let typesDiv = document.getElementById("pokedex-types");
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }
    //update types
    let types = pokedex[this.id]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = types[i]["type"]["name"];
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]); //adds background color and font color
        typesDiv.append(type);
    }
    
    // First evolution level
    let minLevel = pokedex[this.id]['level']["evolution_details"][0]["min_level"];
    console.log("1e evolutie " + minLevel);
    let maxLevel = pokedex[this.id]["level"]["evolves_to"][0]["evolution_details"][0]["min_level"];
    if(maxLevel) {
        console.log("2e evolutie " + maxLevel)
    }
    let level = document.querySelector("#evolution");
    level.innerText = minLevel;

}
function closePokemon() {
    let box = document.getElementById("pokemon-box");
    box.classList.remove("pokemon-boxing");
}
// old function 
function updatePokemon(){
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"];

    //clear previous type
    let typesDiv = document.getElementById("pokemon-types");
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }

    //update types
    let types = pokedex[this.id]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]); //adds background color and font color
        typesDiv.append(type);
    }

    //update description
    document.getElementById("pokemon-description").innerText = pokedex[this.id]["desc"];
    let minLevel = pokedex[this.id]['level']["evolution_details"][0]["min_level"];
    let maxLevel = pokedex[this.id]["level"]["evolves_to"][0]["evolution_details"][0]["min_level"];
    document.getElementById("evolution").innerText = minLevel;
}
function levelPokemon() {
    id = pokedex[this.id]
}

