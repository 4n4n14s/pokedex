
const pokemonlist = document.getElementById('pokemonlist')
const loadMoreButton = document.getElementById('loadmore')
const limit = 15
let offset = 0

function convertPokemonHtml(pokemon){
    return `
        <li class="pokemon  ${pokemon.type} ">
            <span class="number">${pokemon.id}</span>
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



function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonHtml).join('')
        pokemonlist.innerHTML += newHtml 
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click',()=>{
    offset += limit
    loadPokemonItens(offset, limit)
})

    
