const db = require("./models")
const sequelize = require("./sequelize.config")

const { Anime } = db.sequelize.models

async function addAnime() {
  try {
    console.log("About to connect...")
    await sequelize.authenticate()
    console.log("Connected!")

    await Anime.sync()
    // await createAnime()

    console.log("Closing connection...")
    sequelize.close()
  } catch (error) {
    console.log("Failed to populate database: ", error)
  }
}

addAnime()

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

