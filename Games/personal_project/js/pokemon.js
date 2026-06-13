// om de invulling van de hp box aan te passen
// background-image: linear-gradient(to left, white 20%, rgba(0,0,0,0) 0%// Setting pokemon values from the local storages
    const names = localStorage.getItem("pokemonName");
    if (names) {
        const pokemonArray = names.split(" ");
        pokemonArray.shift();
        const index = localStorage.getItem("pokemonID");
        const pokemonIndex = index.split(" ");
        pokemonIndex.shift();
        for(let i = 0; i<pokemonIndex.length; i++) {
            pokemonIndex[i] = parseInt(pokemonIndex[i]);
        }
        const levels = localStorage.getItem("levelPokemon");
        const pokemonLevels = levels.split(" ");
        pokemonLevels.shift();
        for(let i = 0; i<pokemonLevels.length; i++) {
            pokemonLevels[i] = parseInt(pokemonLevels[i]);
        }
        const hp = localStorage.getItem("hpPokemon");
        const pokemonHP = hp.split(" ");
        pokemonHP.shift();
        
        for(let i = 0; i<pokemonHP.length; i++) {
            pokemonHP[i] = parseInt(pokemonHP[i]);
        }
        let type = localStorage.
        getItem("typesPokmeons");
        type = type.replace("undefined", '');
        const pokemonType = type.split("  ");
        
        console.log(pokemonType)
        // loping through the pokemon and viewing them in the pokemon list
        for(let i = 0; i<pokemonIndex.length; i++) {
            const block = document.createElement("div");
            block.classList.add("pokemon-block");
            const nameBlock = document.createElement("div");
            nameBlock.classList.add("box-name");
            nameBlock.textContent = pokemonArray[i]
            const levelBlock = document.createElement("div");
            levelBlock.classList.add("box-level");
            levelBlock.textContent = pokemonLevels[i]
            levelBlock.align = "right";
            levelBlock.valign = "top";
            const elementBlock = document.createElement("div");
            elementBlock.classList.add("hp-element");
            const hpBlock = document.createElement("div");
            hpBlock.classList.add("box-hp");
            hpBlock.textContent = pokemonHP[i]

            const typeBlock = document.createElement("div");
            typeBlock.classList.add("box-type");
            typeBlock.textContent = pokemonType[i]
            typeBlock.align = "right";
            typeBlock.valign = "bottom";

            const indexBlock = document.createElement("div");
            indexBlock.classList.add("box-level");
            indexBlock.textContent = pokemonIndex[i]
            let order = localStorage.pokemonNumber;
            order = order.replace("undefined", '');
            let lengthorder = order.length;
            block.classList.add(String(i));
            block.style.order = parseInt(i);
            const pokemonLists = document.getElementById("pokemon-list-display");
            
            block.append(levelBlock);
            block.append(nameBlock);
            block.append(elementBlock);
            block.append(hpBlock);
            block.append(typeBlock);
            pokemonLists.append(block);
            
        }
    }

    