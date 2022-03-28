Fetch Data: 

create an empty array to put cities into 

fetch is a new browser api that enables user to fetch data api
fetch will return a promise rather than the data itself
 - something will eventually come back from the fetch
 - call .then against the fetch endpoint returning a blob (of data)
 - convert blob into json and then call another promise of .then on that for the data

 how to get data into empty array of cities: 

 push data into cities using spread ...
  - spread into function so that there is one array of a thousand different cities
   - spread allows for individual arguments

   Filter through array upon input search: 
   create a function findMatches which takes arguemnts of wordToMatch and cities array
   from that we return cities array with .filter called on it. each one has a place.
   from we need to fgure out if the city or state matches search. 

   put a variable into a regular expression
  - need to create regular expression outside of return but still inside function
  - create a constant variable regex is equal to new RegExp with arguments of wordToMatch and 'gi' (global, (case) incensitive)

  Now we can return the place of the city of the match of the regex or the place of the state of the match of the regex


  Create Display function:

  called whenever someone changes value on Display
   - create function displayMatches
   -create const variable matchArray which will equal findMatches with an argument of this.value (typed in input) and cities
    create a loop by creating a const varaible html that is equal to matchArray.map with an argument of place 
    - use regex to replace with span of hl
        - constant variable regex is equal to new regExpression of this.value and search globally and incensitively 
        - create city name variable which takes place.city and replace regex, with backticks span with class fo hl (highlight) that takes this. value of search inside span
    - returns backticks li span with a class of name which contains the cityName and the stateName and below that there will be a class of population that shows place.population.
    all of these span inner texts are in ${} format. thus the backticks

    after mapping over array, in outer function call suggestions.innerHtml is equal to html

    map will return an array when we really just want a string so prior to suggestions, add .joinwith an empty statement. change array with multiple items into a big string

   number cammas:
   - create a function numberWithCommas that takes an argument of x and returns
   x turned into a string and replace....just paste it in


   create const variables for searchInput and suggestions with query selectors for both classes
   create event listeners for searchInputs for the change (click outside) and keyup