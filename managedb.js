const db = require("./models")
const sequelize = require("./sequelize.config")

const { Anime } = db.sequelize.models

async function manageDatabase() {
  try {
    console.log("About to connect...")
    await sequelize.authenticate()
    console.log("Connected!")

    await Anime.sync()
    await updateAnime(
      "My Hero Academia",
      "horizontalImg",
      "https://i.postimg.cc/jjvbzqm4/my-hero-academia.avif" 
    )
    await updateAnime(
      "Demon Slayer: Kimetsu no Yaiba",
      "horizontalImg",
      "https://i.postimg.cc/fRG36CRr/demon-slayer.avif"
    )
    await updateAnime(
      "Mashle: Magic and Muscles",
      "horizontalImg",
      "https://i.postimg.cc/tgGTrgr0/mashle.avif"
    )

    console.log("Closing connection...")
    sequelize.close()
    
  } catch (error) {
    console.log("Failed to configure database: ", error)
  }
}

manageDatabase()

async function createAnime(name, code, des, vert, horiz, url) {
  const newAnime = await Anime.create({
    name: name,
    id: code,
    verticalImg: vert,
    horizontalImg: horiz,
    description: des,
    url: url
  })

  console.log("New anime created: " + name)
}

async function updateAnime(name, prop, newValue) {
  const animeToUpdate = await Anime.findOne({ where: { name: name } })
  animeToUpdate[prop] = newValue
  await animeToUpdate.save()
}

