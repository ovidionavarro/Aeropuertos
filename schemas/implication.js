import z from 'zod'
const implicationSchema = z.object({
  ship1: z.number({
    invalid_type_error: 'ship must be a IdShip',
    required_error: 'ship is required'
  }),
  startDate1: z.date({
    invalid_type_error: 'startDate must be a date',
    required_error: 'startDate is required'
  }),
  ship2: z.number({
    invalid_type_error: 'ship must be a IdShip',
    required_error: 'ship is required'
  }),
  startDate2: z.date({
    invalid_type_error: 'startDate must be a date',
    required_error: 'startDate is required'
  })
})
export function validateImplication(input) {
  const result = implicationSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
