import z from 'zod'
const airPortSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'name is required'
  }),
  geoPos: z.string({
    invalid_type_error: 'geographical position must be a string',
    required_error: 'geographical position is required'
  }),
  Direction: z.string({
    invalid_type_error: 'direction must be a string',
    required_error: 'direction is required'
  })
})
export function validateAirPort(input) {
  const result = airPortSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
