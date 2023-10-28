import db from './connection.js'
import * as Models from '../models/index.js'

const dbConnect = ({ alter }) => {
  db.authenticate().then(() => console.log('DB ok'))
    .catch((err) => { throw new Error(err) })

  db.sync({ alter }).then(() => console.log('DB sync ok'))
    .catch((err) => { throw new Error(err) })
}
export default dbConnect
