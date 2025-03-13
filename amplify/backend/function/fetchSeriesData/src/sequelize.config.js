const { Sequelize } = require("sequelize")
const { DsqlSigner } = require("@aws-sdk/dsql-signer")
const { SSMClient, GetParametersCommand } = require("@aws-sdk/client-ssm")

// require("dotenv").config();

async function getHostName() {
  const newClient = new SSMClient()

  const command = new GetParametersCommand({
    Names: ["/amplify/dndgumvlyz7pn/dev/AMPLIFY_fetchSeriesData_DB_HOST"],
    WithDecryption: true
  })

  try {
    const response = await newClient.send(command)
    console.log("Secret value retrieved successfully")
    return response.Parameters[0].Value

  } catch (error) {
    console.error("Error retrieving secret:", error)
  }
}

async function generateToken(endpoint, region) {
  const signer = new DsqlSigner({
    hostname: endpoint,
    region: region
  })

  try {
    const token = await signer.getDbConnectAdminAuthToken()
    console.log(token)
    return token

  } catch (error) {
    console.error("Failed to generate token: ", error)
    throw error
  }
}

async function initiateSequelize() {
  const sequelize = new Sequelize({
    username: "admin",
    password: await generateToken(await getHostName(), "us-east-2"),
    database: "anime-series",
    host: await getHostName(),
    port: 5432,
    dialect: "postgres"
  })

  return sequelize
}

module.exports = initiateSequelize;