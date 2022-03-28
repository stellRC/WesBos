
const endpoint = 'https://raw.githubusercontent.com/msramalho/json-tv-quotes/master/quotes.json';

const movieName = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => movieName.push(...data));
console.log(endpoint)
console.log(movieName)


function findMatches(wordToMatch, movieName) {
return movieName.filter(results => {
    const regex = new RegExp(wordToMatch, 'gi')
    return results.source.match(regex) 
})
}

function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
const matchArray = findMatches(this.value, movieName)
const html = matchArray.map(results => {
    const regex = new RegExp(this.value, 'gi');
    const movieTitle = results.source.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
    <li class="movies">
        <div class="movie--quote">${results.quote}</div>
        <div class="movie--data">
            <span>${results.author}, ${movieTitle}</span>
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
