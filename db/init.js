import db from './connection.js'
import * as Models from '../models/definitions/index.js'
import * as Associations from '../models/definitions/associations.js'
const dbConnect = ({ alter, force }) => {
  db.authenticate()
    .then(() => console.log('DB ok'))
    .catch((err) => {
      throw new Error(err)
    })

  db.sync({ alter, force })
    .then(() => console.log('DB sync ok'))
    .catch((err) => {
      throw new Error(err)
    })
}
export default dbConnect
