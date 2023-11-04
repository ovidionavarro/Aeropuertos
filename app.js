import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import dbConnect from './db/init.js'
import { AdminAuthRouter, ClientRouter } from './routes/index.js'
import { UserModel, ClientModel } from './models/index.js'
const PORT = process.env.PORT ?? 1234

// conectar con la base de datos
dbConnect({ alter: true })

const app = express()
app.use(express.json())
app.use(cors())

app.use('/clients', ClientRouter(ClientModel))
// app.use('/login', AuthRouter)
app.use('/admin/login', AdminAuthRouter(UserModel))

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
