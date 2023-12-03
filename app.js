import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import dbConnect from './db/init.js'
import {
  AdminAuthRouter,
  ClientRouter,
  AuthRouter,
  RouterTypes,
  AirPortRouter,
  InstallationRouter,
  ServiceRouter,
  ShipRouter,
  ReparationRouter,
  ContractServiceRouter,
  FlightRouter,
  PassengerRouter,
  WorkShopRouter,
  ImplicationRouter,
  ValuationRepRouter
} from './routes/index.js'
import {
  AirPort,
  Classification,
  Client,
  ClientType,
  ContractService,
  Flight,
  Implication,
  Installation,
  InstallationType,
  Passenger,
  Passengertype,
  Reparation,
  ReparationType,
  Service,
  Ship,
  User,
  ValuationReparation,
  WorkShopReparation
} from './models/definitions/index.js'
import ModelConstructor from './models/model-constructor.js'
const PORT = process.env.PORT ?? 1234

// conectar con la base de datos
dbConnect({ alter: false })
// rol,valuacionrep
// flight eliminar lo de crear la fecha
const app = express()
app.use(express.json())
app.use(cors())
app.use('/login', AuthRouter(new ModelConstructor(Client)))
app.use('/admin/login', AdminAuthRouter(new ModelConstructor(User)))
app.use('/reparationType', RouterTypes(new ModelConstructor(ReparationType)))
app.use('/passengerType', RouterTypes(new ModelConstructor(Passengertype)))
app.use('/installationType', RouterTypes(new ModelConstructor(InstallationType)))
app.use('/classificationShip', RouterTypes(new ModelConstructor(Classification)))
app.use('/typeClient', RouterTypes(new ModelConstructor(ClientType)))
app.use('/clients', ClientRouter(new ModelConstructor(Client)))
app.use('/airport', AirPortRouter(new ModelConstructor(AirPort)))
app.use('/installation', InstallationRouter(new ModelConstructor(Installation)))
app.use('/service', ServiceRouter(new ModelConstructor(Service)))
app.use('/ship', ShipRouter(new ModelConstructor(Ship)))
app.use('/reparation', ReparationRouter(new ModelConstructor(Reparation)))
app.use('/contractService', ContractServiceRouter(new ModelConstructor(ContractService)))
app.use('/flight', FlightRouter(new ModelConstructor(Flight)))
app.use(
  '/passenger',
  PassengerRouter(new ModelConstructor(Passenger), new ModelConstructor(Flight))
)
app.use('/workshop', WorkShopRouter(new ModelConstructor(WorkShopReparation)))
app.use(
  '/implication',
  ImplicationRouter(new ModelConstructor(Implication), new ModelConstructor(WorkShopReparation))
)
app.use(
  '/valuationReparation',
  ValuationRepRouter(
    new ModelConstructor(ValuationReparation),
    new ModelConstructor(WorkShopReparation)
  )
)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
