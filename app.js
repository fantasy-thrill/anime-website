const mysql = require("mysql2")
const sequelize = require("./sequelize.config")
const db = require("./models")
const express = require("express")
const app = express()
require("dotenv").config()

sequelize
  .authenticate()
  .then(() => console.log("Successfully connected to database"))
  .catch(error => console.error("Couldn't connect to database: ", error))

const { Anime, Product } = db.sequelize.models

app.get("/data", async (req, res) => {
  try {
    const data = await Anime.findAll()
    const catalog = []
    data.forEach(series => catalog.push(series.toJSON()))
    res.json(catalog)
    
  } catch (error) {
    res.sendStatus(500).end("Could not fetch catalog: ", error)
  }
})

app.get("/products", async (req, res) => {
  try {
    const data = await Product.findAll()
    const catalog = []
    data.forEach(item => catalog.push(item.toJSON()))
    res.json(catalog)
    
  } catch (error) {
    res.sendStatus(500).end("Could not fetch catalog: ", error)
  }
})

app.use(express.static("public"))

app.listen(5500, () => {
  console.log("Server running on port 5500")
})
