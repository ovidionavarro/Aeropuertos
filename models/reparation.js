import ModelConstructor from './model-constructor.js'
import { Installation, AirPort } from './definitions/index.js'
class ReparationModel extends ModelConstructor {
  getAirportsInfo = async () => {
    try {
      const result = await this.Model.findAll({
        include: {
          model: Installation,
          include: {
            model: AirPort,
            attributes: ['name', 'geoPos']
          }
        }
      })
      const vals = result.map((r) => r.dataValues.Instalation.AirPort.dataValues)
      return vals
    } catch (err) {
      console.log(err)
      return []
    }
  }
}

export default ReparationModel
