import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import dbConnect from './db/init.js'
import { AdminAuthRouter, ClientRouter, AuthRouter, GenericRouter } from './routes/index.js'
import {
  AirPort,
  Classification,
  Client,
  ClientType,
  Installation,
  InstallationType,
  Passengertype,
  Reparation,
  ReparationType,
  Service,
  Ship,
  User
} from './models/definitions/index.js'
import ModelConstructor from './models/model-constructor.js'
const PORT = process.env.PORT ?? 1234

// conectar con la base de datos
dbConnect({ alter: false })
// aeropuertos
const app = express()
app.use(express.json())
app.use(cors())
app.use('/login', AuthRouter(new ModelConstructor(Client)))
app.use('/admin/login', AdminAuthRouter(new ModelConstructor(User)))
app.use('/reparationType', GenericRouter(new ModelConstructor(ReparationType)))
app.use('/passengerType', GenericRouter(new ModelConstructor(Passengertype)))
app.use('/installationType', GenericRouter(new ModelConstructor(InstallationType)))
app.use('/classificationShip', GenericRouter(new ModelConstructor(Classification)))
app.use('/typeClient', GenericRouter(new ModelConstructor(ClientType)))
app.use('/clients', ClientRouter(new ModelConstructor(Client)))
app.use('/airport', GenericRouter(new ModelConstructor(AirPort)))
app.use('/installation', GenericRouter(new ModelConstructor(Installation)))
app.use('/service', GenericRouter(new ModelConstructor(Service)))
app.use('/ship', GenericRouter(new ModelConstructor(Ship)))
app.use('/reparation', GenericRouter(new ModelConstructor(Reparation)))

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
