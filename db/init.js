import db from './connection.js'
import * as Models from '../models/index.js'

const dbConnect = ({ sync }) => {
  db.authenticate().then(() => console.log('DB ok'))
    .catch((err) => { throw new Error(err) })

  db.sync({ alter: sync }).then(() => console.log('DB sync ok'))
    .catch((err) => { throw new Error(err) })
}
export default dbConnect
