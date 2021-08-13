
let pokemonRepository = (function () {
  let repository = [];

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function(event) {
      console.log(pokemon);
      showDetails(pokemon);
    });

  }

  function showDetails(pokemon) {
      console.log(pokemon);
  }
// Function for load data from an external source
function loadList() {
  return fetch(apiUrl).then(function(response) {
    return response.json();
  }).then(function (jason) {
    json.result.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

// Function to load details data for a given Pokemon
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.jason();
  }).then(function (details) {
    // Add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  // Data is loaded
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});







// {
//   name: "Ivysaur",
//   heigh: "1",
//   type: ["grass","poison"]
// },
// {
//   name: "Spearow",
//   heigh: "0.3",
//   type: ["flying","normal"]
// },
// {
//   name: "Rhydon",
//   heigh: "1.9",
//   type: ["rock","ground"]
// },
// {
//   name: "Starmie",
//   heigh: "1.1",
//   type: ["psychic","water"]
// },
// {
//   name: "Articuno",
//   heigh: "1.7",
//   type: ["ice","flying"]
// },
// {
//   name: "Aggron",
//   heigh: "2.1",
//   type: ["steel","rock"]
// },
// ];
//






//   //calling function getAll from IIFE
//
//  "forEach" loop which iterate over each object within that array and display them in order with their Name and Heigh
//   // pokemonList.forEach(function(item) {
//   //   // checking which pokemon has the biggest heigh
//   //   if (item.heigh >2){
//   //     document.write('<p> "' + item.name + ' (heigh: ' + item.heigh + ')' + '"' + ' - Wow, that\'s the big one!' + '</p>')
//   //   }else {
//   //     document.write(`<p>"${item.name} (heigh: ${item.heigh})"</p>`);
//   //     //document.write('<p>' + ' "' + pokemonList[i].name + ' ' + ' (heigh: ' + pokemonList[i].heigh + ')' + '"' + '</p>');
//   //   }
//   // });
//   //alert('Hello, My name is Darko');
//
//   //let favoriteFood = 'Mediterranean';
//   //document.write(favoriteFood);
//
//   //let myName = 'Darko';
//   //document.write(myName);
//   //myName = 'Lanovic';
//   //document.write(myName);
//
//   // Math exsmles
//   //let simpleAddition = 2 + 2;
//   //document.write(simpleAddition);
//
//   //let size = 100;
//   //let doubleSize = size * 2;
//   //document.write(doubleSize);
//
//   //let minSize = (doubleSize * 2) - (size / 2);
//   //document.write(minSize);
//
//   // STRINGS
//   //let text1 = 'This is a text!';
//   //let text2 = "This uses double quotes.";
//
//   //let escapedText = "He said: \"Yes!\", that's for sure";
//   //let escapedText2 = 'He said: "Yes!", that\'s for sure.';
//   // If I want to use backslash in text
//   //let escapedText3 = 'This is \\ it';
