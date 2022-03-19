//https://pokeapi.co/api/v2/ability


let pokemonResource = {};
let pokemonArr = [];


const getPokeList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10")
    .then((res) => {
        const r = res.json();
        return r;
    })
    .then((r) => {
        console.log(r);
        pokemonResource = r;
    });
};


const getPokemon = (URL) => {
    fetch(URL)
    .then((res) => {
        const r = res.json();
        return r;

    })
    .then((res) => {
        pokemonArr.push(res);
        });
};

getPokeList();

console.log(pokemonResource);