import z from 'zod'
const serviceSchema = z.object({
  description: z.string({
    invalid_type_error: 'description must be a string',
    required_error: 'description is required'
  }),
  price: z.number({
    invalid_type_error: 'price must be a number',
    required_error: 'price position is required'
  }),
  idInstalation: z.number({
    invalid_type_error: 'idInstalation must be a string',
    required_error: 'idInstalation is required'
  })
})
export function validateService(input) {
  const result = serviceSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
