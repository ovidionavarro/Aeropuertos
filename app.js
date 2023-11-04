import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import dbConnect from './db/init.js'
import { AdminAuthRouter, AuthRouter, ClientRouter } from './routes/index.js'
import authenticate from './middlewares/authenticate.js'
import authorize from './middlewares/authorize.js'
const PORT = process.env.PORT ?? 1234

// conectar con la base de datos
dbConnect({ alter: true })

const app = express()
app.use(express.json())
app.use(cors())

app.use('/clientes', ClientRouter)
app.use('/login', AuthRouter)
app.use('/admin/login', AdminAuthRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
