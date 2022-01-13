// phase IIFE (functional programming)
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modal = document.querySelector('#pokedex');

  // public function creation (getAll and add)
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }

  // addlist function created
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");

    let listpokemon = document.createElement("li");

    let button = document.createElement("button");

    let pokemonImg = document.createElement("img");


    button.innerText = pokemon.name;
    button.classList.add("button");
    button.classList.add("btn");
   

    
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.appendChild(pokemonImg);

    // event listener
    button.addEventListener("click", function(event) {
      showDetails(pokemon, modal);
    });
  }

  // loadlist function created
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };

        // allows for all the pokemon printed out in console
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }


  // loaddetails function created
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
      pokemon.weight = details.weight
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });

  }


  // modal creation(using bootsrap) with name, image height and weight element
  function showModal(pokemon){
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');
  
      modalTitle.empty();
      modalBody.empty();
  
      let nameElement = $('<h1 class="text-capitalize">' + pokemon.name + '</h1>');
      let imageElement = $('<img class="modal-img" style="width:40%">');
      imageElement.attr("src", pokemon.imageUrl);
  
      let heightElement = $('<p>' + 'Height : ' + pokemon.height + '</p>');
      let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + '</p>');
      
  
      modalTitle.append(nameElement);
      modalBody.append(imageElement);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
  
      $('#pokedex').modal();
  }
6
  fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(function (response) {
    return response.json();
  })
  .then(function (pokemonList) {
    console.log(pokemonList);
  })
  .catch(function () {});
  
  
  //Explanation: This IIFE will ultimately return the object below, with key-value pairs associated with the functions above.
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };

})();

// callbacks
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


