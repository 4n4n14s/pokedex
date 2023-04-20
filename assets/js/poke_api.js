const pokeApi = {}
function convertpokemonApiDetail(pokeDetail){

    const pokemon = new Pokemon()


    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.order
    pokemon.id = pokeDetail.id

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`

    return pokemon


}
pokeApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertpokemonApiDetail)

}

pokeApi.getPokemons = (offset, limit ) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonbudy) => jsonbudy.results)
        .then((pokemons)=> pokemons.map(pokeApi.getPokemonsDetails))
        .then((detalRequest) => Promise.all(detalRequest))
        .then((pokemonDetails) => pokemonDetails)
       




}