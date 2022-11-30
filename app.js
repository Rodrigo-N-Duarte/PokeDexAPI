window.onload = () => {
  pokeAPI(150)
}

function refreshPokemon() {
  let input = document.querySelector("#nPokemons")
  let numero = input.value
  let pokeDexBody = document.getElementById('pokemons')
  cleanPokeDex()
  pokeAPI(numero)

  function pokeAPI(n) {
    var id = 1;
    for (let i = 1; i <= n; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(Response => {
        return Response.json()
      }).then(finalObject => {
        pokeDexBody.innerHTML += `
        <div class="card" style="width: 18rem;">
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${finalObject.id}.png" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${(finalObject.name).toUpperCase()[0] + (finalObject.name).substring(1)}</h5>
<p class="card-text">ID: ${finalObject.id}</p>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#pokemon${finalObject.id}" aria-controls="offcanvasScrolling">Info</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="pokemon${finalObject.id}" aria-labelledby="offcanvasScrollingLabel">
<div class="offcanvas-header">
<h5 class="offcanvas-title" id="offcanvasScrollingLabel">${(finalObject.name).toUpperCase()[0] + (finalObject.name).substring(1)}</h5>
<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
<p>Type: ${(finalObject.types[0].type.name).toUpperCase()}</p>
<p>Peso: ${(finalObject.weight)}kg</p>
<p>Versão shiny:</p>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${finalObject.id}.png" class="card-img-top" alt="...">
</div>
</div>
</div>
</div>
        `
      })
      id++
    }
  }
}

function searchPokemon() {
  cleanPokeDex()
  var nameID = document.querySelector("#searchInput").value
  let pokeDexBody = document.getElementById('pokemons')

  fetch(`https://pokeapi.co/api/v2/pokemon/${nameID}`).then(Response => {
        return Response.json()
      }).then(finalObject => {
        pokeDexBody.innerHTML += `
        <div class="card" style="width: 18rem;">
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${finalObject.id}.png" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${(finalObject.name).toUpperCase()[0] + (finalObject.name).substring(1)}</h5>
<p class="card-text">ID: ${finalObject.id}</p>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#pokemon${finalObject.id}" aria-controls="offcanvasScrolling">Info</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="pokemon${finalObject.id}" aria-labelledby="offcanvasScrollingLabel">
<div class="offcanvas-header">
<h5 class="offcanvas-title" id="offcanvasScrollingLabel">${(finalObject.name).toUpperCase()[0] + (finalObject.name).substring(1)}</h5>
<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
<p>Type: ${(finalObject.types[0].type.name).toUpperCase()}</p>
<p>Peso: ${(finalObject.weight)}kg</p>
<p>Versão shiny:</p>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${finalObject.id}.png" class="card-img-top" alt="...">
</div>
</div>
</div>
</div>
        `
      })

}

function cleanPokeDex() {
  document.getElementById('pokemons').innerHTML = ""
}