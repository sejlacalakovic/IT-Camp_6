//https://pokeapi.co/api/v2/ability

window.onload = async function() {
let pokemonResource = {};
const pokemonInfo = [];


const getPokeList = async () => {
    try {
        const r = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10");
const res = await r.json();
pokemonResource = res;
    }catch (error) {
        console.log(error);
    }
};

const getPokemon = async (URL) => {
    try {
        const p = await fetch (URL);
        const pokemon = await p.json();
        pokemonInfo.push(pokemon)
    }catch (error) {
        console.log(error);
    }
    };

    await getPokeList();

// for (let u  = 0; u < pokemonResource.results.length; u++) {
    
//     return getPokemon(p.url);

// });

await Promise.all(pokemonArr);
console.log(pokemonInfo);
};