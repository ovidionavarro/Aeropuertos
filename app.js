import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT ?? 1234
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hola mundo')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
