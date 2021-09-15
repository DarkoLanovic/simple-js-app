const pokemonRepository = (function () {
  function getAll() {
    const apiURL = "https://pokeapi.co/api/v2/pokemon/?limit=150";
    let pokemonList = [];

    fetch(apiURL)
      .then((response) => response.json())
      .then((response) => {
        pokemonList = response.results;
        pokemonList.forEach((pokemon) => {
          const newPokemonList = document.querySelector(".pokemon-list");
          // newPokemonList.classList.add("list-group");
          const listItemPokemon = document.createElement("li");
          const button = document.createElement("button");
          button.innerText = pokemon.name;
          button.classList.add("btn");
          button.classList.add("button-class");
          button.setAttribute("data-toggle", "modal");
          button.setAttribute("data-target", "#exampleModal");
          button.addEventListener("click", () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              .then((res) => res.json())
              .then((result) => {
                const pokemonDetails =
                  `Height: ${result.height}<br>` +
                  `Weight: ${result.weight}<br>`;
                //Show modal starts
                $(".modal-title").html(pokemon.name);
                $(".modal-body").html("");
                // Show modal ends
                $(".modal-body").append(
                  `${pokemonDetails}`,
                  `<img src="${result.sprites.front_shiny}">`
                );
              })
              .catch((err) => console.error(err));

            // alert(pokemonDetails);
          });
          listItemPokemon.appendChild(button);
          newPokemonList.appendChild(listItemPokemon);
        });
      })
      .catch((error) => console.log(error));
  }

  function loadcreator() {
    $("#creator").click(() => {
      alert("Created by Darko!");
    });
  }

  function main() {
    pokemonRepository.getAll();
    loadcreator();
  }

  // adding the return statement
  return {
    main,
    getAll,
  };
})();

pokemonRepository.main();
