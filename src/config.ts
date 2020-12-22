import {config as configDotenv} from 'dotenv'
import {resolve} from 'path'

switch(process.env.NODE_ENV) {
  case "development":
    console.log("Config environment is 'development'")
    configDotenv({
      path: resolve(__dirname, "../.env.development")
    })
    break
  case "production":
    configDotenv({
      path: resolve(__dirname, "../.env.production")
    })
    break
  default:
    throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`)
}