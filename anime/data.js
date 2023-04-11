class Anime {
 constructor(name, verticalImg, horizontalImg, url) {
  this.name = name;
  this.verticalImg = verticalImg
  this.horizontalImg = horizontalImg
  this.url = url
 }
}

export const mostPopularList = []
export const currentAnimeList = []

function addAnime(name, vrt, hrz, url, pushToMP) {
 const title = new Anime(name, vrt, hrz, url, pushToMP)
 currentAnimeList.push(title)
 if (pushToMP === "yes") {
  mostPopularList.push(title)
 }
}

addAnime(
 "My Hero Academia",
 "/images/Carousel Images/MHA.jpe",
 "/images/my_hero_academia_s6.jpe",
 "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
 "yes"
)

addAnime(
 "Demon Slayer: Kimetsu no Yaiba",
 "/images/Carousel Images/DS.jpe",
 "/images/demon_slayer_tv.jpe",
 "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
 "yes"
)

addAnime(
 "Vinland Saga",
 "/images/Carousel Images/VS.jpe",
 "/images/vinland_saga_s2.jpe",
 "https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga",
 "yes"
)

addAnime(
 "Mob Psycho 100",
 "/images/Carousel Images/MP100.jpe",
 "/images/mob_psycho_100_s3.jpe",
 "https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100",
 "yes"
)

addAnime(
 "Dr. Stone",
 "/images/Carousel Images/DRS.jpe",
 "/images/dr-stone.jpe",
 "https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone",
 "no"
)

addAnime(
 "Jujutsu Kaisen",
 "/images/Carousel Images/JJK.jpe",
 "/images/jujutsu-kaisen.jpe",
 "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
 "no"
)

addAnime(
 "Hell's Paradise",
 "/images/Carousel Images/HP.jpe",
 "/images/hells_paradise.jpe",
 "https://www.crunchyroll.com/series/GJ0H7Q5ZJ/hells-paradise",
 "no"
)

addAnime(
 "Mashle: Magic and Muscles",
 "/images/Carousel Images/MMAM.jpe",
 "/images/mashle.jpe",
 "https://www.crunchyroll.com/series/GDKHZEP8W/mashle-magic-and-muscles",
 "no"
)