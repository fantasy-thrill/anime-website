const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const { SSMClient, GetParametersCommand } = require("@aws-sdk/client-ssm")
const { createClient } = require("@supabase/supabase-js")

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

async function getSecrets() {
  const secrets = {
    dbUrl: "",
    dbApiKey: ""
  }

  const newClient = new SSMClient()

  const command = new GetParametersCommand({
    Names: ["SUPABASE_URL", "SUPABASE_API_KEY"],
    WithDecryption: true
  })

  try {
    const response = await newClient.send(command)
    console.log("Secrets retrieved successfully")
    secrets.dbApiKey = response.Parameters[0].Value
    secrets.dbUrl = response.Parameters[1].Value

  } catch (error) {
    console.error("Error retrieving secrets:", error)
  }

  return secrets
}

app.get("/series", async function(req, res) {
  try {
    const supabase = createClient(
      (await getSecrets()).dbUrl, 
      (await getSecrets()).dbApiKey
    )
    
    const { data, error } = await supabase
      .from("Anime")
      .select()
      .order("name", { ascending: true })
    
    if (error) throw error

    return res.status(200).json(data)

  } catch (error) {
    return res.status(500).end("Could not return data:\n", error)
  }
});


app.listen(3000, function() {
  console.log("App started")
})

module.exports = app
