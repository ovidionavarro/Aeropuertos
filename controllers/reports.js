import { actions } from '../config/defaultValues.js'
import PDFDocument from 'pdfkit'
import ExcelJS from 'exceljs'
export default class ReportsController {
  constructor(ReparationModel, WorkShopReparationModel, PassengerModel) {
    this.ReparationModel = ReparationModel
    this.WorkShopReparationModel = WorkShopReparationModel
    this.PassengerModel = PassengerModel
  }

  get = async (req, res) => {
    const { query } = req
    const { action, format } = query
    if (format !== 'pdf' && format !== 'xlsx') {
      return res.status(400).json({ msg: 'error' })
    }
    if (!actions.includes(action)) {
      return res.status(400).json({ msg: 'error' })
    }
    let response
    let title
    switch (action) {
      case actions[0]: {
        response = await this.getNamesLocationsOfRepairServiceAirports()
        title = 'Aeropuertos que brindan servicios de reparacion'
        break
      }
      case actions[1]: {
        response = await this.getTotalCapitalRepairsPerAirport('capital')
        title = 'Cantidad de reparaciones capitales por aeropuerto'
        break
      }
      case actions[2]: {
        response = await this.getJoseMartiAirportClientsByTypeAndShip()
        title = 'Obtener clientes que han llegado al aeropuerto Jose Marti'
        break
      }
      case actions[3]: {
        response = await this.getAirportsWithLeastTrafficAndServices()
        title = 'Consulta4'
        break
      }

      case actions[4]: {
        response = await this.getAverageCostOfInefficientServicesAtJoseMarti()
        title = 'Consulta5'
        break
      }
    }
    if (format === 'pdf') {
      return this.generatePDF(res, title, response)
    }
    if (format === 'xlsx') {
      return this.generateExcel(res, title, response)
    }
  }

  getNamesLocationsOfRepairServiceAirports = async () => {
    const result = await this.ReparationModel.getAirportsInfo()
    return result
  }

  getTotalCapitalRepairsPerAirport = async (type) => {
    const result = await this.WorkShopReparationModel.getTotalCapitalRepairsPerAirport(type)
    return result
  }

  getJoseMartiAirportClientsByTypeAndShip = async () => {
    const result = await this.PassengerModel.getJoseMartiAirportClientsByTypeAndShip()
    return result
  }

  getAirportsWithLeastTrafficAndServices = async () => {
    return { action: 'action4' }
  }

  getAverageCostOfInefficientServicesAtJoseMarti = async () => {
    return { action: 'action5' }
  }

  generatePDF = async (res, title, data) => {
    // Crear un nuevo documento PDF
    const doc = new PDFDocument()

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"')
    doc.pipe(res)
    doc.fontSize(16).text(title, 100, 100)
    console.log(data)
    if (data.lenght !== 0 && data !== undefined) {
      try {
      const _keys = Object.keys(data[0])
      const k = _keys.join(' | ')
      doc.text(k)
      doc.moveDown()
      }
      catch (err) {
        doc.text('')
      }

      data.forEach((element) => {
        const vals = Object.values(element)
        const _vals = vals.join(' ')
        doc.text(_vals)
        doc.moveDown()
      })
    }
    doc.addPage()
    doc.end()
    return res.status(200)
  }

  generateExcel = async (res, title, data) => {
      const workbook = new ExcelJS.Workbook()
      const worksheet = workbook.addWorksheet(title)
      console.log(data)
      if (data.lenght !== 0 && data !== undefined) {
        try {
        const _keys = Object.keys(data[0])
        worksheet.addRow(_keys)
        }catch(err){
          worksheet.addRow(['',''])
        }
      data.forEach((d) => {
        const values = Object.values(d)
        worksheet.addRow(values)
      })
    }
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      )
      res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx')
      await workbook.xlsx.write(res)
      res.end()
      return res.status(200)
  }
}
