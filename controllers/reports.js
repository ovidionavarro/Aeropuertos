import { actions } from '../config/defaultValues.js'

export default class ReportsController {
  constructor(ReparationModel) {
    this.ReparationModel = ReparationModel
  }

  get = async (req, res) => {
    const { body } = req
    // validate body
    const { action, format } = body
    switch (action) {
      case actions[0]: {
        const response = await this.getNamesLocationsOfRepairServiceAirports()
        return res.json(response)
      }
      case actions[1]: {
        const response = await this.getTotalCapitalRepairsPerAirport()
        return res.json(response)
      }
      case actions[2]: {
        const response = await this.getJoseMartiAirportClientsByTypeAndShip()
        return res.json(response)
      }
      case actions[3]: {
        const response = await this.getAirportsWithLeastTrafficAndServices()
        return res.json(response)
      }

      case actions[4]: {
        const response = await this.getAverageCostOfInefficientServicesAtJoseMarti()
        return response.json()
      }
    }
  }

  getNamesLocationsOfRepairServiceAirports = async () => {
    const result = await this.ReparationModel.getAirportsInfo()
    return result
  }

  getTotalCapitalRepairsPerAirport = async () => {
    return { action: 'action2' }
  }

  getJoseMartiAirportClientsByTypeAndShip = async () => {
    return { action: 'action3' }
  }

  getAirportsWithLeastTrafficAndServices = async () => {
    return { action: 'action4' }
  }

  getAverageCostOfInefficientServicesAtJoseMarti = async () => {
    return { action: 'action5' }
  }
}
