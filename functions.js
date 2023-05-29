import data from "/Back-end Data/data.js"

const mostPopularList = data.mostPopularList
const currentAnimeList = data.currentAnimeList
const suggestedSeries = data.suggestedSeries

// Function for responsive navigation bar
function mobileBarFunc() {
  const menuIcon = document.getElementById("menu-icon")
  const searchIcon = document.getElementById("search-icon")
  const navBar = document.getElementById("navigation-bar")
  const searchBar = document.getElementById("search")
  menuIcon.addEventListener("click", () =>  {
    navBar.classList.toggle("displayed")
    if (searchBar.classList.contains("displayed")) {
      searchBar.classList.remove("displayed")
    }
  })
  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("displayed")
    if (navBar.classList.contains("displayed")) {
      navBar.classList.remove("displayed")
    }
  })
}

mobileBarFunc()

// Script for suggested series section
export function displaySuggestedSeries() {
  const suggestions = document.getElementById("suggestions")

  for (const anime of suggestedSeries) {
    const animeImg = document.createElement("div")
    animeImg.classList.add("anime-img")
    const animeDescription = document.createElement("div")
    animeDescription.classList.add("anime-description")

    const image = document.createElement("img")
    image.setAttribute("src", anime["horizontalImg"])
    image.setAttribute("alt", anime["name"])
    animeImg.appendChild(image)

    const h2 = document.createElement("h2")
    const para = document.createElement("p")
    const anchor = document.createElement("a")
    h2.textContent = anime["name"]
    para.innerHTML = anime["description"]
    anchor.setAttribute("href", anime["url"])
    anchor.setAttribute("target", "_blank")
    anchor.classList.add("watch-now-btn")
    anchor.textContent = "Watch Now"
    animeDescription.append(h2, para, anchor)

    suggestions.append(animeImg, animeDescription)
  }
}

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
   if (window.innerWidth < 1000) {
    animeImg.setAttribute('src', anime["verticalImg"])
   } else {
    animeImg.setAttribute('src', anime["horizontalImg"])
   }
   animeImg.setAttribute('alt', anime["name"])
  }
 }

// Function for alternating between portrait and landscape images
export function toggleImageWidth(className) {
  const titles = document.querySelectorAll(className)
  const mediaQuery = window.matchMedia('(max-width: 1000px)')
  for (const title of titles) {
    const animeImg = title.querySelector('img')
    for (const anime of currentAnimeList) {
      if (animeImg.alt === anime["name"]) {
        mediaQuery.addEventListener('change', (event) => {
          if (event.matches) {
            animeImg.src = anime["verticalImg"]
          } else {
            animeImg.src = anime["horizontalImg"]
          }
        })
      }
    }
  } 
}

// Function for displaying the featured anime series
export function displayFeaturedAnime(title) {
  const subsection = document.getElementById("featured-anime-subsection")
  const watchBtn = document.querySelector(".options a")

  for (const anime of currentAnimeList) {
    if (title === anime["name"]) {
      const heading = document.createElement("h3")
      heading.textContent = anime["name"]

      const animeImg = document.createElement("img")
      animeImg.setAttribute("src", anime["horizontalImg"])
      animeImg.setAttribute("alt", anime["name"])
      animeImg.style.width = "70%"

      const description = document.createElement("p")
      description.innerHTML = anime["description"]

      watchBtn.setAttribute("href", anime["url"])
      subsection.append(heading, animeImg, description)
    }
  }
}

// Script for news section on home page
export function displayHomePageNews(objArr) {
  const topStories = document.getElementById("top-stories")

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

    const letterRegex = /(?<![A-Z\s])[A-Z]/g
    const lastAndFirst = article["description"].match(letterRegex)
    subTitle.textContent = article["description"].substring(0, article["description"].indexOf(lastAndFirst[1]))
    
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

// Script for displaying anime titles on Shows page
export function displayTitles() {
  const letterSections = document.querySelectorAll("#alphabetical-list div")
  
  for (const section of letterSections) {
    const sectionList = document.createElement("ul")
    section.appendChild(sectionList)
    
    for (const anime of currentAnimeList) {
      if (anime["name"].startsWith(section.id)) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `<a href=\"${anime["url"]}\">${anime["name"]}</a>`
        sectionList.appendChild(listItem)
      }
    }
  }
}


// Script for the main news page
export function displayNews(objArr) {
  const newsList = document.querySelector('#news-stories')

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

    const letterRegex = /(?<![A-Z\s])[A-Z]/g
    const lastAndFirst = article["description"].match(letterRegex)
    subTitle.textContent = article["description"].substring(0, article["description"].indexOf(lastAndFirst[1]))
    
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