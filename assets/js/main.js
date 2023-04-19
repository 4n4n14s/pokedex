

function convertPokemonHtml(pokemon){
    return `
        <li class="pokemon  ${pokemon.type} ">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>`).join('')}

                </ol>
                <img src="${pokemon.photo}"    alt="${pokemon.name}">

            </div>
        </li> 
    `

}

const pokemonlist = document.getElementById('pokemonlist')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonHtml).join('')
    pokemonlist.innerHTML = newHtml 
})

    