const endpoint = 'https://raw.githubusercontent.com/fabiomaia/pokedex/master/app/src/main/assets/pokemon_cards.json'

const pokemonName = [];




fetch(endpoint)
    .then(blob => blob.json())
    .then(data => pokemonName.push(...data));
    console.log(endpoint)
    console.log(pokemonName)

function findMatches(wordToMatch, pokemonName) {
    return pokemonName.filter(results => {
        const regex = new RegExp(wordToMatch, 'gi')
        return results.name.match(regex) 
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findMatches(this.value, pokemonName)
    const html = matchArray.map(results => {
        const regex = new RegExp(this.value, 'gi');
        const pokiName = results.name.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
            <span class="name">${pokiName}</span>
            <span class="img"><button type="button" class="btn"><img class="img" src=${results.spriteURI}></button></span>
            <div class="data">
                <span>ID: ${results.id}</span>
                <span>Type: ${results.types}</span>
            </div>
        </li>
        `
    }).join('');
    suggestions.innerHTML = html;
}


const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const button = document.querySelector('.btn');
const imageClicked = document.querySelector('.img')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
