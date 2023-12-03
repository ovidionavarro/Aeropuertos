import z from 'zod'
const installationSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'name is required'
  }),
  location: z.string({
    invalid_type_error: 'location position must be a string',
    required_error: 'location position is required'
  }),
  idTypeInst: z.number({
    invalid_type_error: 'idTypeInst must be a number',
    required_error: 'idTypeInst is required'
  }),
  idAirport: z.number({
    invalid_type_error: 'idAirport must be a number',
    required_error: 'idAirport is required'
  })
})
export function validateInstallation(input) {
  const result = installationSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
