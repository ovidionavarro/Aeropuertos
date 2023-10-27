import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import dbConnect from './db/init.js'
import { ClientRouter } from './routes/index.js'

const PORT = process.env.PORT ?? 1234

// conectar con la base de datos
dbConnect({ sync: true })

const app = express()
app.use(express.json())
app.use(cors())

app.use('/clientes', ClientRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
