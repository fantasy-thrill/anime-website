import { mostPopularList, currentAnimeList } from "/data.js"

// Script for "Most Popular" section on home page
export function displayMostPopularAnime() {
  const mostPopular = document.getElementById('mp-show-tiles')
  for (const anime of mostPopularList) {
   const anchor = document.createElement('a')
   anchor.setAttribute('href', anime["url"])
   anchor.setAttribute('class', 'show-tile')
   mostPopular.appendChild(anchor)
   const animeImg = document.createElement('img')
   anchor.appendChild(animeImg)
   animeImg.setAttribute('src', anime["horizontalImg"])
   animeImg.setAttribute('alt', anime["name"])
  }
 }

// Script for news section on home page
fetch('homepagetopstories.json')
.then((response) => response.json())
.then((json) => displayHomePageNews(json))

const topStories = document.getElementById("top-stories")
function displayHomePageNews(objArr) {
  for (const article of objArr) {
    const tile = document.createElement('div')
    topStories.appendChild(tile)
    tile.setAttribute('class', 'hp-news-img')
    const img = document.createElement('img')
    tile.appendChild(img)
    img.setAttribute('src', article["urlToImage"])
    img.style.width = '250px'

    const row = document.createElement('div')
    const anchor = document.createElement('a')
    const subTitle = document.createElement('p')
    const pubDate = document.createElement('p')

    topStories.appendChild(row)
    row.setAttribute('class', 'news-info')
    anchor.setAttribute('href', article["url"])
    anchor.setAttribute('class', 'news-link')
    anchor.textContent = article["title"]
    subTitle.textContent = article["description"]
    
    const theDay = article["publishedAt"].match(/\d{4}-\d\d-\d\d/g)
    const dateStr = theDay[0]
    const newDateStr = new Date(dateStr)
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = newDateStr.toLocaleDateString('en-US', options);
    pubDate.textContent = formattedDate
    pubDate.style.fontStyle = 'italic'

    row.append(anchor, subTitle, pubDate)
  }
}

// Script for the main news page
fetch('newsarticles.json')
.then((response) => response.json())
.then((json) => displayNews(json))

const newsList = document.querySelector('#news-stories')
function displayNews(objArr) {
for (const article of objArr) {
    const tile = document.createElement('div')
    newsList.appendChild(tile)
    tile.setAttribute('class', 'news-img')
    const img = document.createElement('img')
    tile.appendChild(img)
    img.setAttribute('src', article["urlToImage"])
    img.width = 170

    const row = document.createElement('div')
    const anchor = document.createElement('a')
    const subTitle = document.createElement('p')
    const pubDate = document.createElement('p')

    newsList.appendChild(row)
    row.setAttribute('class', 'news-info')
    anchor.setAttribute('href', article["url"])
    anchor.setAttribute('class', 'news-link')
    anchor.textContent = article["title"]
    subTitle.textContent = article["description"]
    
    const theDay = article["publishedAt"].match(/\d{4}-\d\d-\d\d/g)
    const dateStr = theDay[0]
    const newDateStr = new Date(dateStr)
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = newDateStr.toLocaleDateString('en-US', options);
    pubDate.textContent = formattedDate
    pubDate.style.fontStyle = 'italic'

    row.append(anchor, subTitle, pubDate)
 }
}