//  a list of pokemons with different property variables (for easy accessibility reduced from 10 to 3)

let pokemonList = [
    {name:'charizard', height: 1.7,  type: ['fire', 'flying']}, 
    {name:'wingull', height: 0.6,   type: ['fairy', 'normal']}, 
    {name:'venusaur', height: 2,   type: ['grass', 'poison']}
];

// creating for loop (variable initialization: let i=0), (conditional: i < pokemonList.lenght ),(action: i = i+1 or i++)
for (let i = 0; i < pokemonList.length; i++) {
    document.write('<br>' + pokemonList[i].name + (' , height: ') + pokemonList[i].height);
    
    // for display on the console log
    console.log(pokemonList[i].name + (' , height: ') + pokemonList[i].height);
    
}
   
