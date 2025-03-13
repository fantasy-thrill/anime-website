/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["DB_HOST"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const db = require("./models")
const sequelize = require("./sequelize.config")

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

async function connectToDatabase() {
  await sequelize
    .authenticate()
    .then(() => console.log("Successfully connected to database"))
    .catch(error => console.error("Couldn't connect to database: ", error))
}

const { Anime, Product } = db.sequelize.models

app.get("/series", async function(req, res) {
  await connectToDatabase()

  try {
    const data = await Anime.findAll()
    const catalog = []
    data.forEach(series => catalog.push(series.toJSON()))
    return res.status(200).json(catalog)
    
  } catch (error) {
    return res.status(500).end("Could not fetch catalog:\n", error)
  }
});


app.listen(3000, function() {
    console.log("App started")
})

module.exports = app
