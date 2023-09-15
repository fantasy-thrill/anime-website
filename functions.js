export const mostPopularList = [
  "Jujutsu Kaisen",
  "Bleach: Thousand-Year Blood War",
  "One Piece",
  "Demon Slayer: Kimetsu no Yaiba"
]

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
export function displaySuggestedSeries(objArr, seriesOne, seriesTwo) {
  const suggestions = document.getElementById("suggestions")

  for (const anime of objArr) {
    if (anime["Name"] === seriesOne || anime["Name"] === seriesTwo) {
      const animeImg = document.createElement("div")
      animeImg.classList.add("anime-img")
      const animeDescription = document.createElement("div")
      animeDescription.classList.add("anime-description")

      const image = document.createElement("img")
      image.setAttribute("src", anime["Horizontal Image"])
      image.setAttribute("alt", anime["Name"])
      animeImg.appendChild(image)

      const h2 = document.createElement("h2")
      const para = document.createElement("p")
      const anchor = document.createElement("a")
      h2.innerHTML = anime["Name"]
      para.innerHTML = anime["Description"]
      anchor.setAttribute("href", anime["URL"])
      anchor.setAttribute("target", "_blank")
      anchor.classList.add("watch-now-btn")
      anchor.textContent = "Watch Now"
      animeDescription.append(h2, para, anchor)

      suggestions.append(animeImg, animeDescription)
    }
  }
}

// Script for "Most Popular" section on home page
export function displayMostPopularAnime(objArr) {
  const mostPopular = document.getElementById('mp-show-tiles')
  mostPopularList.forEach(name => {
    for (const anime of objArr) {
      if (anime["Name"] === name) {
        const anchor = document.createElement('a')
        anchor.setAttribute('href', anime["URL"])
        anchor.setAttribute('class', 'show-tile')
        mostPopular.appendChild(anchor)
        const animeImg = document.createElement('img')
        anchor.appendChild(animeImg)
        if (window.innerWidth < 1000) {
          animeImg.setAttribute('src', anime["Vertical Image"])
        } else {
          animeImg.setAttribute('src', anime["Horizontal Image"])
        }
        animeImg.setAttribute('alt', anime["Name"])
      }
    }
  })
 }

// Function for alternating between portrait and landscape images
export function toggleImageWidth(objArr, classOne, classTwo) {
  const mpTitles = document.querySelectorAll(classOne)
  const sugTitles = document.querySelectorAll(classTwo)
  const mediaQueryOne = window.matchMedia('(max-width: 1000px)')
  const mediaQueryTwo = window.matchMedia('(min-width: 450px) and (max-width: 1000px)')
  for (const title of mpTitles) {
    const animeImg = title.querySelector('img')
    for (const anime of objArr) {
      if (animeImg.alt === anime["namName"]) {
        mediaQueryOne.addEventListener('change', (event) => {
          if (event.matches) {
            animeImg.src = anime["Vertical Image"]
          } else {
            animeImg.src = anime["Horizontal Image"]
          }
        })
      }
    }
  } 
  for (const title of sugTitles) {
    const animeImg = title.querySelector('img')
    for (const anime of objArr) {
      if (animeImg.alt === anime["Name"]) {
        mediaQueryTwo.addEventListener('change', (event) => {
          if (event.matches) {
            animeImg.src = anime["Vertical Image"]
          } else {
            animeImg.src = anime["Horizontal Image"]
          }
        })
      }
    }
  }
}

// Function for displaying the featured anime series
export function displayFeaturedAnime(objArr, title) {
  const subsection = document.getElementById("featured-anime-subsection")
  const watchBtn = document.querySelector(".options a")

  for (const anime of objArr) {
    if (title === anime["Name"]) {
      const heading = document.createElement("h3")
      heading.textContent = anime["Name"]

      const animeImg = document.createElement("img")
      animeImg.setAttribute("src", anime["Horizontal Image"])
      animeImg.setAttribute("alt", anime["Name"])

      const description = document.createElement("p")
      description.innerHTML = anime["Description"]

      watchBtn.setAttribute("href", anime["URL"])
      subsection.append(heading, animeImg, description)
    }
  }
}

// Script for displaying anime titles on Shows page
export function displayTitles(objArr) {
  const letterSections = document.querySelectorAll("#alphabetical-list div")
  
  for (const section of letterSections) {
    const sectionList = document.createElement("ul")
    sectionList.style.listStyleType = "none"
    section.appendChild(sectionList)
    
    for (const anime of objArr) {
      if (anime["Name"].startsWith(section.id)) {
        const listItem = document.createElement("li")
        listItem.style.margin = "10px 0"
        const anchor = document.createElement("a")
        anchor.setAttribute("href", anime["URL"])
        const imageStyle = "width: 5em; vertical-align: middle; margin-right: 20px"
        anchor.innerHTML = `<img src=\"${anime["Vertical Image"]}\" alt=\"${anime["Name"]}\" style=\"${imageStyle}\">
        ${anime["Name"]}`
        listItem.appendChild(anchor)
        sectionList.appendChild(listItem)
      }
    }
  }
}


// Script for the main news page
export function displayNews(objArr, divID) {
  const newsList = document.getElementById(divID)

  for (const article of objArr) {
    const tile = document.createElement('div')
    newsList.appendChild(tile)
    tile.setAttribute('class', 'news-img')
    const img = document.createElement('img')
    tile.appendChild(img)
    img.setAttribute('src', article["urlToImage"])
    // img.style.width = "15em"

    const row = document.createElement('div')
    const anchor = document.createElement('a')
    const subTitle = document.createElement('p')
    const pubDate = document.createElement('p')

    newsList.appendChild(row)
    row.setAttribute('class', 'news-info')
    anchor.setAttribute('href', article["url"])
    anchor.setAttribute('class', 'news-link')
    anchor.textContent = article["title"]

    const symbolRegex = /\/\//
    if (symbolRegex.test(article["description"])) {
      const slashes = article["description"].match(symbolRegex)[0]
      subTitle.textContent = article["description"].substring(0, article["description"].indexOf(slashes))
    } else {
      subTitle.textContent = article["description"]
    }

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

export function mostImportantStories(newsObjArr, customArr) {
  fetch("/data")
    .then(response => response.json())
    .then(catalog => {
      let count = 0
      for (const article of newsObjArr) {
        const articleMatch = catalog.find(anime => {
          const titleRegex = new RegExp(anime["Name"], "gi");
          return titleRegex.test(article["title"])
        })
        if (articleMatch && count < 2) {
          customArr.push(article)
          count++
        }
      }
      displayNews(customArr, "top-stories")
    }) 
}