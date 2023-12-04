import ModelConstructor from './model-constructor.js'
import { Installation, AirPort } from './definitions/index.js'
class ReparationModel extends ModelConstructor {
  getAirpotsInfo = async () => {
    try {
      const result = await this.Model.findAll({
        include: {
          model: Installation
        }
      })
      return result
    } catch (err) {
      console.log(err)
      return []
    }
  }
}

export default ReparationModel
