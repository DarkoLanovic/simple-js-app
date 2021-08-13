
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});







// let pokemonRepository = (function () {
//   let pokemonList = [];
//   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
//
//   function add(pokemon) {
//     if (
//       typeof pokemon === "object" &&
//       "name" in pokemon
//     ) {
//       pokemonList.push(pokemon);
//     } else {
//       console.log("pokemon is not correct");
//     }
//   }
//
//   function getAll() {
//     return pokemonList;
//   }
//
//   function addListItem(pokemon) {
//     let pokemonList = document.querySelector(".pokemon-list");
//     let listpokemon = document.createElement("li");
//     let button = document.createElement("button");
//     button.innerText = pokemon.name;
//     button.classList.add("button-class");
//     listpokemon.appendChild(button);
//     pokemonList.appendChild(listpokemon);
//     button.addEventListener('click', function(event) {
//       showDetails(pokemon);
//     });
//   }
//
// // Function for load data from an external source
// function loadList() {
//   return fetch(apiUrl).then(function (response) {
//     return response.json();
//   }).then(function (json) {
//     json.result.forEach(function (item) {
//       let pokemon = {
//         name: item.name,
//         detailsUrl: item.url
//       };
//       add(pokemon);
//       console.log(pokemon);
//     });
//   }).catch(function (e) {
//     console.error(e);
//   })
// }
//
// // Function to load details data for a given Pokemon
// function loadDetails(item) {
//   let url = item.detailsUrl;
//   return fetch(url).then(function (response) {
//     return response.json();
//   }).then(function (details) {
//     // Add the details to the item
//     item.imageUrl = details.sprites.front_default;
//     item.height = details.height;
//     item.types = details.types;
//   }).catch(function (e) {
//     console.error(e);
//   });
// }
//
// // Function for executing "loadDetails" when a user click on a Pokemon to show Pokemon datails
//   function showDetails(item) {
//     pokemonRepository.loadDetails(item).then(function () {
//       console.log(item);
//     });
//   }
//
//   return {
//     add: add,
//     getAll: getAll,
//     addListItem: addListItem,
//     loadList: loadList,
//     loadDetails: loadDetails,
//     showDetails: showDetails
//   };
// })();
//
//
// pokemonRepository.loadList().then(function() {
//   // Data is loaded
//   pokemonRepository.getAll().forEach(function(pokemon) {
//     pokemonRepository.addListItem(pokemon);
//   });
// });







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


// pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

// console.log(pokemonRepository.getAll());



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
