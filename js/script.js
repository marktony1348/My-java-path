//  a list of pokemons with different property variables (for easy accessibility reduced from 10 to 3)

let pokemonList = [
    {name:'charizard', height: 1.7,  type: ['fire', 'flying']}, 
    {name:'wingull', height: 0.6,   type: ['fairy', 'normal']}, 
    {name:'venusaur', height: 2,   type: ['grass', 'poison']}
];


// for each loop
pokemonList.forEach(function(pokemon) {
  console.log('name: ' + pokemon.name + ', ' + 'height: ' + pokemon.height + ',' + ' type: ' + pokemon.type);

 });
     
  
