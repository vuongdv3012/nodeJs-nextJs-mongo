import express from 'express'
import connect from './database/database.js'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { userRoutes } from './routes/index.js'
import { OutputType, print } from './helpers/print.js'
import Exception from './exceptions/Exception.js'
import { ErrMessage } from './constant/index.js'
dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT ?? 8080

app.use(cors())

//define routes
app.use('/users', userRoutes)

app.listen(PORT, async function () {
  await connect()
  print(`Listening on ${PORT}`)
})
