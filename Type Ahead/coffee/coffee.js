
const endpoint = 'https://api.sampleapis.com/coffee/hot';

const coffeeName = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => coffeeName.push(...data));
console.log(endpoint)
console.log(coffeeName)


function findMatches(wordToMatch, coffeeName) {
return coffeeName.filter(results => {
    const regex = new RegExp(wordToMatch, 'gi')
    return results.title.match(regex) 
})
}

function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
const matchArray = findMatches(this.value, coffeeName)
const html = matchArray.map(results => {
    const regex = new RegExp(this.value, 'gi');
    const coffeeTitle = results.title.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
    <li class="coffee">
        <span class="coffee--title">${coffeeTitle}</span>
        <div class="coffee--description">${results.description}</div>
        <div class="coffee--ingredients">
            <span>${results.ingredients}</span>
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
