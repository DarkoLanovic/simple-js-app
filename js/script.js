

let pokemonRepository = (function () {
  let pokemonList = [];
  let modalContainer = document.querySelector('#modal-container');
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let pokemonName = document.createElement('h1');
      pokemonName.classList.add('Pokemon-name');
  let pokemonHeight = document.createElement('p');
      pokemonHeight.classList.add('Pokemon-height');

  // MODAL FUNCTIONS
  function showModal(title, text) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    let maodalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');

    if (dialogPromiseReject) {
      dialogPromiseReject()
      dialogPromiseReject = null;
    }
  }

// DIALOG FUNCTIONS
  function showDialog(title, text) {
    showModal(title,text);
// Adding confirm and cancel button to the modal
    let modal = modalContainer.querySelector('.modal');

    let confirmButton = document.cerateElement('button')
    confirmButton.classList.add('modal-confirm')
    confirmButton.innerText = 'Confirm';

    let cancelButton = document.querySelector('bitton');
    cancelButton.classList.add('modal-cancle');
    cancelButton.innerText = 'cancel';

    modal.appendChild(confirmButton);
    modal.appendChild(cancelButton);

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

  document.querySelector('#show-dialog').addEventListener('click', () => {
    showDialog('Confirm action', 'Are you sure you want to do this').then(function() {
      alert('confirmed!');
    }, () => {
      alert('non confirmed');
    });
  });


// ESCAPE BUTTON listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    // Closing modal by clicking INSIDE the modal or directly on the overal
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });



// DOM FUNCTIONS
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

    // Function for load data from an external source API
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

    function showDetails(item) {
       loadDetails(item).then(function () {
      pokemonName.innerHTML = item.name;
      pokemonHeight.innerHTML = 'Height: ' + item.height;
        showModal();
      });

      modal.appendChild(pokemonName);
      modal.appendChild(pokemonHeight);
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
