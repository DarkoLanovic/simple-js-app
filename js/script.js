let pokemonRepository = (function () {
  let pokemonList = [];
  let modalContainer = document.querySelector('#modal-container');
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Creating displaying modal with Pokemon details and 'Close button'
  function renderPokemon(title, text, img)
  {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');
    // (<button class="modal-close">Button</button>) 'Close' button
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let imgElement = document.createElement('img');
    imgElement.src = img;

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(imgElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');

  }

  // MODAL FUNCTIONS
  function showModal(title, text, img) {
    renderPokemon(title, text, img);
  }

  function hideModal() {
    let maodalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');

  }

  // DIALOG FUNCTION
  function showDialog(title, text) {
    showModal(title,text);
    let modal = modalContainer.querySelector('.modal');
    // Focusing confirmButton so that the user can simply press Enter
    confirmButton.focus();
    return new Promise((resolve, reject) => {
      cancelButton.addEventListener('click', hideModal);
      confirmButton.addEventListener('click', () => {
        dialogPromiseReject = null;   // Reset
        hiheModal();
        resolve();
      });
      // This can be used to reject from other functions
      dialogPromiseReject = reject;
    });
  }

  // 'ESCAPE' BUTTON listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  // Closing modal by clicking directly on the modal overal
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  // Function to load details data for a given Pokemon
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

  // Displaying modal with pokemon details: picture, name, height
  function showDetails(item) {
    loadDetails(item).then(function () {
      let pokemonName = item.name;
      let pokemonHeight = "Height: " + item.height;
      // Calling Pokemon API with Pokemon pictures
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(response =>
          {
            showModal(pokemonName, pokemonHeight, response.sprites.front_default);
          })
          .catch(error=>console.log(error))
        });
      }

      // DOM FUNCTIONS
      function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("div");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function(event) {
          showDetails(pokemon);
        });
      }

      // Function for load Pokemon data from an external source API
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
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

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
      // Data is loaded
      pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
      });
    });
