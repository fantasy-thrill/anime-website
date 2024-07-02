const db = require("./models")
const sequelize = require("./sequelize.config")

const { Anime, Product } = db.sequelize.models

async function manageDatabase() {
  try {
    console.log("About to connect...")
    await sequelize.authenticate()
    console.log("Connected!")

    await Anime.sync()
    await Product.sync()

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
  console.log(`Instance updated: "${animeToUpdate.name}, ${prop}: ${newValue}"`)
}

async function addProduct(name, imgUrl, price) {
  let code = ""
  const charString = "ABCDEFGHIJKLM1234567890NOPQRSTUVWXYZ1234567890"
  const letterOnlyStr = charString.substring(0, 13) + charString.substring(23, 36)
  
  for (let i = 0; i < 10; i++) {
    let str = i < 2 ? letterOnlyStr : charString
    code += charString.charAt(Math.floor(Math.random() * str.length))
  }

  const shopProduct = await Product.create({
    name: name,
    id: code,
    image: imgUrl,
    price: price,
    description: ""
  })

  console.log("New product created: " + name)
}

