import ModelConstructor from './model-constructor.js'
import { Installation, AirPort, Reparation, ReparationType } from './definitions/index.js'
import { Sequelize } from 'sequelize'
class WorkShopReparationModel extends ModelConstructor {
  getTotalCapitalRepairsPerAirport = async (repType) => {
    const result = await this.Model.findAll({
      include: [
        {
          model: Reparation,
          include: [
            {
              model: ReparationType,
              where: { name: repType }
            },
            {
              model: Installation,
              include: [
                {
                  model: AirPort
                }
              ]
            }
          ]
        }
      ],
      attributes: [
        [Sequelize.col('Reparation->Instalation->Airport.name'), 'airport'],
        [Sequelize.fn('COUNT', Sequelize.col('Reparation.id')), 'count']
      ],
      group: ['Reparation.id']
    })
    const r = []
    result.forEach((item) => {
      if (item.Reparation !== null) {
        const airport = item.getDataValue('airport')
        const count = item.getDataValue('count')
        r.push({ airport, count })
      }
    })
    console.log(r)
    return r
  }
}

export default WorkShopReparationModel
