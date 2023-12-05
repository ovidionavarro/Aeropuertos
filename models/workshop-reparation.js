import ModelConstructor from './model-constructor.js'
import { Installation, AirPort } from './definitions/index.js'
class WorkShopReparationModel extends ModelConstructor {
  getTotalCapitalRepairsPerAirport = async (repType) => {
    const result = await this.Model.findAll()
    return result
  }
}

export default WorkShopReparationModel
