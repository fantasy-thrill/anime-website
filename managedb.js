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

    await addProduct(
      "Attack on Titan Chibi Figurine Set",
      "https://i.postimg.cc/5t8JMmxq/attackontitan-figurine-set.jpg",
      22.99
    )
    await addProduct(
      "Demon Slayer: Kimetsu no Yaiba Tanjiro and Nezuko Crop Top Hoodie",
      "https://i.postimg.cc/9MpjDFwD/demonslayerhoodieset.jpg",
      19.99
    )
    await addProduct(
      "Bleach Hollow Ichigo Black T-Shirt - Size S-XL",
      "https://i.postimg.cc/0Qxs5Jjg/hollow-ichigo.jpg",
      17.99
    )
    await addProduct(
      "Naruto Fan Souvenir Set",
      "https://i.postimg.cc/K86bVWy8/naruto-set.jpg",
      28.99
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
  console.log(`Instance updated: ${animeToUpdate.name}, ${prop}: ${newValue}`)
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

