const pokemonContainer = document.getElementById('pokemon-container');

function buscarPokemon() {
    const pokemonId = document.getElementById('pokemon-id').value;

    if (!pokemonId) {
        pokemonContainer.innerHTML = `<p style="color: red;">Por favor, insira um número válido</p>`;
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado');
            }
            return response.json();
        })
        .then(data => {
            pokemonContainer.innerHTML = `
                <h2 class="text-white text-xl">${data.name}</h2>
                <img style="width: 300px" src="${data.sprites.front_default}" alt="${data.name}">
            `;
        })
        .catch(error => {
            pokemonContainer.innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
}
