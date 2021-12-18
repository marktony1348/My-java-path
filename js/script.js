//  a list of pokemons with different property variables (for easy accessibility reduced from 10 to 3)

let pokemonList = [
    {name:'charizard', height: 1.7,  type: ['fire', 'flying']}, 
    {name:'wingull', height: 0.6,   type: ['fairy', 'normal']}, 
    {name:'venusaur', height: 2,   type: ['grass', 'poison']}
];

// creating for loop (variable initialization: let i=0), (conditional: i < pokemonList.lenght ),(action: i = i+1 or i++)
for (let i = 0; i < pokemonList.length; i++) {
    // html tags that are placed in the javascript strings as represented 
    // in all the conditional statements below

    document.write('<p style= "color: blue;"> <br>' + pokemonList[i].name + ('  (height: ') + pokemonList[i].height + ')</p>');
    
    // for display on the console log
    console.log(pokemonList[i].name + (' , height: ') + pokemonList[i].height);

    // creating the if-else conditional statements for the height classification
    if (pokemonList[i].height >= 2) {

        
        document.write('<i> - Wow, that\'s big</i>');
    } 
    // this area shows the median height of the 3 pokemons in the list
    else if (pokemonList[i].height > 1 || pokemonList[i] < 2 ) {
        document.write('<i> This is a medium-sized pokemon</i>');
    }
    else {
        document.write('<i> This is a small pokemon </i>');
    }
    
}
  
