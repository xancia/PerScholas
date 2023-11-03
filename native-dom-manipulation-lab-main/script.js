let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const mainTitle = document.getElementById('main-title')
mainTitle.textContent = 'Family.'

  // Part 2
const body = document.querySelector('body')
body.style.backgroundColor = '#736B92'

  // Part 3
const favList = document.getElementById('favorite-things')
const listItems = favList.getElementsByTagName('li')
favList.removeChild(listItems[listItems.length - 1])

  // Part 4
const specialTitle = document.getElementsByClassName('special-title')
for (let title of specialTitle) {
  title.style.fontSize = '2rem'
}

  // Part 5
const pastRaces = document.getElementById('past-races')
const raceItems = pastRaces.getElementsByTagName('li')
for (let race of raceItems) {
  if (race.textContent == 'Chicago') {
    pastRaces.removeChild(race)
  }
}


  // Part 6
let newRace = document.createElement('li')
newRace.textContent = 'Charlotte'
pastRaces.appendChild(newRace)

  // Part 7
let newBlog = document.createElement('div')
newBlog.classList.add('blog-post','purple')
let newBlogH1 = document.createElement('h1')
newBlogH1.textContent = 'Charlotte'
let newBlogText = document.createElement('p')
newBlogText.textContent = 'I RACED WITH THE GANG IN DOWNTOWN CHARLOTTE'
newBlog.appendChild(newBlogH1)
newBlog.appendChild(newBlogText)

let main = document.querySelector('.main')
main.appendChild(newBlog)

  // Part 8
let quoteTitle = document.querySelector('#quote-title')
quoteTitle.addEventListener('click', function(evt) {
  randomQuote()
})

  // Part 9
let blogPosts = document.getElementsByClassName('blog-post')
for (let blog of blogPosts) {
  blog.addEventListener('mouseout', (evt) => {blog.classList.toggle('purple', force)})
  blog.addEventListener('mouseenter', (evt) => {blog.classList.toggle('red')})
}


});
