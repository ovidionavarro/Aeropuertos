import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import dbConnect from './db/init.js'
import { AdminAuthRouter, ClientRouter, AuthRouter, TypeRouter } from './routes/index.js'
import {
  Classification,
  Client,
  ClientType,
  InstallationType,
  Passengertype,
  ReparationType,
  User
} from './models/definitions/index.js'
import ModelConstructor from './models/model-constructor.js'
const PORT = process.env.PORT ?? 1234

// conectar con la base de datos
dbConnect({ alter: false })

const app = express()
app.use(express.json())
app.use(cors())
app.use('/reparationType', TypeRouter(new ModelConstructor(ReparationType)))
app.use('/passengerType', TypeRouter(new ModelConstructor(Passengertype)))
app.use('/installationType', TypeRouter(new ModelConstructor(InstallationType)))
app.use('/classificationShip', TypeRouter(new ModelConstructor(Classification)))
app.use('/typeClient', TypeRouter(new ModelConstructor(ClientType)))
app.use('/clients', ClientRouter(new ModelConstructor(Client)))
app.use('/login', AuthRouter(new ModelConstructor(Client)))
app.use('/admin/login', AdminAuthRouter(new ModelConstructor(User)))

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
