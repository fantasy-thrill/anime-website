class Anime {
 constructor(name, verticalImg, horizontalImg, description, url) {
  this.name = name
  this.verticalImg = verticalImg
  this.horizontalImg = horizontalImg
  this.description = description
  this.url = url
 }
}

const mostPopularList = []
const currentAnimeList = []
const suggestedSeries = []

function addAnime(name, vrt, hrz, info, url, pushToMP) {
 const title = new Anime(name, vrt, hrz, info, url, pushToMP)
 currentAnimeList.push(title)
 if (pushToMP === "yes") {
  mostPopularList.push(title)
 }
}

addAnime(
 "My Hero Academia",
 "/images/Vertical Images/MHA.jpe",
 "/images/Horizontal Images/my_hero_academia_s6.jpe",
 "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.",
 "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
 "yes"
)

addAnime(
 "Demon Slayer: Kimetsu no Yaiba",
 "/images/Vertical Images/DS.jpe",
 "/images/Horizontal Images/demon_slayer_tv.jpe",
 "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself.\nThough devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
 "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
 "yes"
)

addAnime(
 "Vinland Saga",
 "/images/Vertical Images/VS.jpe",
 "/images/Horizontal Images/vinland_saga_s2.jpe",
 "Around the end of the millennium, Viking, the mightiest but atrocious tribe, had been out breaking everywhere. Thorfinn, the son of the greatest warrior, lived his childhood in the battlefield. He was seeking the land of reverie called Vinland. This is the story of a true warrior in an age of turmoil.",
 "https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga",
 "yes"
)

addAnime(
 "Spy &times; Family",
 "/images/Vertical Images/SxF.jpe",
 "/images/Horizontal Images/spyxfamily.jpg",
 "World peace is at stake and secret agent Twilight must undergo his most difficult mission yet—pretend to be a family man. Posing as a loving husband and father, he’ll infiltrate an elite school to get close to a high-profile politician. He has the perfect cover, except his wife’s a deadly assassin and neither knows each other’s identity. But someone does, his adopted daughter who’s a telepath!",
 "https://www.crunchyroll.com/series/G4PH0WXVJ/spy-x-family",
 "no"
)

addAnime(
 "Mob Psycho 100",
 "/images/Vertical Images/MP100.jpe",
 "/images/Horizontal Images/mob_psycho_100_s3.jpe",
 "Shigeo Kageyama, a.k.a. \"Mob,\" is a boy who has trouble expressing himself, but who happens to be a powerful esper. Mob is determined to live a normal life and keeps his ESP suppressed, but when his emotions surge to a level of 100%, something terrible happens to him! As he's surrounded by false espers, evil spirits, and mysterious organizations, what will Mob think? What choices will he make?",
 "https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100",
 "yes"
)

addAnime(
 "Dr. Stone",
 "/images/Vertical Images/DRS.jpe",
 "/images/Horizontal Images/dr-stone.jpe",
 "Several thousand years after a mysterious phenomenon that turns all of humanity to stone, the extraordinarily intelligent, science-driven boy, Senku Ishigami, awakens. Facing a world of stone and the total collapse of civilization, Senku makes up his mind to use science to rebuild the world. Starting with his super strong childhood friend Taiju Oki, who awakened at the same time, they will begin to rebuild civilization from nothing.",
 "https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone",
 "no"
)

addAnime(
 "Jujutsu Kaisen",
 "/images/Vertical Images/JJK.jpe",
 "/images/Horizontal Images/jujutsu-kaisen.jpe",
 "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.",
 "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
 "no"
)

addAnime(
 "Hell's Paradise",
 "/images/Vertical Images/HP.jpe",
 "/images/Horizontal Images/hells_paradise.jpe",
 "Gabimaru reigns as the strongest and most ruthless assassin in his village. But now finds himself on death row—with only one way out: retrieve the Elixir of Life from a sinister island. Longing for freedom, he accepts the challenge. But with fellow convicts vying for the same prize and demonic beasts lurking, how will Gabimaru survive this harrowing quest?",
 "https://www.crunchyroll.com/series/GJ0H7Q5ZJ/hells-paradise",
 "no"
)

addAnime(
 "Mashle: Magic and Muscles",
 "/images/Vertical Images/MMAM.jpe",
 "/images/Horizontal Images/mashle.jpe",
 "This is a world of magic. This is a world in which magic is casually used by everyone. In a deep, dark forest in this world of magic, there is a boy who is singlemindedly working out. His name is Mash Burnedead, and he has a secret. He can’t use magic.<br>All he wanted was to live a quiet life with his family, but people suddenly start trying to kill him one day and he somehow finds himself enrolled in Magic School. There, he sets his sights on becoming a \"Divine Visionary,\" the elite of the elite. Will his ripped muscles work against the best and brightest of the wizarding world?",
 "https://www.crunchyroll.com/series/GDKHZEP8W/mashle-magic-and-muscles",
 "no"
)

mostPopularList.pop()
const myHero = mostPopularList.splice(0, 1)[0]
mostPopularList.splice(2, 0, myHero)

for (const anime of currentAnimeList) {
 if (anime['name'] === "Hell's Paradise") {
  mostPopularList.push(anime)
 }
}

for (const anime of currentAnimeList) {
 if (anime["name"] === "Mashle: Magic and Muscles" || anime["name"] === "Jujutsu Kaisen") {
  suggestedSeries.push(anime)
 }
}

for (const anime of currentAnimeList) {
 if (anime["name"] === "Dr. Stone") {
  mostPopularList.splice(2, 1, anime)
 }
}



export default { mostPopularList, currentAnimeList, suggestedSeries }