import z from 'zod'
const reparationSchema = z.object({
  description: z.string({
    invalid_type_error: 'description must be a string',
    required_error: 'description is required'
  }),
  priceHour: z.number().nonnegative({
    invalid_type_error: 'priceHour must be a string',
    required_error: 'priceHour is required'
  }),
  idReparationType: z.number().nonnegative({
    invalid_type_error: 'idReparationType must be a number',
    required_error: 'idReparationType is required'
  }),
  idInstalation: z.number().nonnegative({
    invalid_type_error: 'idInstalation must be a number',
    required_error: 'idInstalation is required'
  })
})
export function validateReparation(input) {
  const result = reparationSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
