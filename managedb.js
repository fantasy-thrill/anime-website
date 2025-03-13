const db = require("./amplify/backend/function/fetchSeriesData/src/models")
const sequelize = require("./amplify/backend/function/fetchSeriesData/src/sequelize.config")

const { Anime, Product } = db.sequelize.models

async function manageDatabase() {
  try {
    console.log("About to connect...")
    await sequelize.authenticate()
    console.log("Connected!")

    await Anime.sync()
    await Product.sync()

    await updateEntry(Product, "C19S19Q8OU", "image", "https://i.postimg.cc/T1FkZFTp/naruto-set.png")
    await updateEntry(Product, "MT8779Q8MR", "image", "https://i.postimg.cc/509kv8PN/demonslayerhoodieset.png")
    await updateEntry(Product, "S277HU7EW1", "image", "https://i.postimg.cc/kGB1Yq30/attackontitan-figurine-set.png")
    await updateEntry(Product, "T7HLY9X694", "image", "https://i.postimg.cc/tTrvz7fd/hollow-ichigo-tshirt.png")

    console.log("Closing connection...")
    sequelize.close()
    
  } catch (error) {
    console.log("Failed to configure database: ", error)
  }
}

manageDatabase()

async function createAnime(name, code, des, vert, horiz, url) {
  await Anime.create({
    name: name,
    id: code,
    verticalImg: vert,
    horizontalImg: horiz,
    description: des,
    url: url
  })

  console.log("New anime created: " + name)
}

async function addProduct(name, imgUrl, price) {
  let code = ""
  const charString = "ABCDEFGHIJKLM1234567890NOPQRSTUVWXYZ1234567890"
  const letterOnlyStr = charString.substring(0, 13) + charString.substring(23, 36)
  
  for (let i = 0; i < 10; i++) {
    let str = i < 2 ? letterOnlyStr : charString
    code += charString.charAt(Math.floor(Math.random() * str.length))
  }

  await Product.create({
    name: name,
    id: code,
    image: imgUrl,
    price: price,
    description: ""
  })

  console.log("New product created: " + name)
}

async function updateEntry(model, code, prop, newValue) {
  const entryToUpdate = await model.findOne({ where: { id: code } })
  entryToUpdate[prop] = newValue
  await entryToUpdate.save()
  console.log(`Instance updated: "${entryToUpdate.name}, ${prop}: ${newValue}"`)
}

