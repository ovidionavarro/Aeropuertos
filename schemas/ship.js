import z from 'zod'
const shipSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'name is required'
  }),
  status: z.string({
    invalid_type_error: 'status must be a string',
    required_error: 'status is required'
  }),
  capacity: z.number().nonnegative({
    invalid_type_error: 'capacity must be a number',
    required_error: 'capacity is required'
  }),
  numberCrews: z.number().nonnegative({
    invalid_type_error: 'numberCrews must be a number',
    required_error: 'numberCrews is required'
  }),
  totalPlazas: z.number().nonnegative({
    invalid_type_error: 'totalPlazas must be a number',
    required_error: 'totalPlazas is required'
  }),
  owner: z.number({
    invalid_type_error: 'owner must be a IdClient',
    required_error: 'owner is required'
  }),
  classification: z.number({
    invalid_type_error: 'classification must be a IdClassification',
    required_error: 'classification is required'
  })
})
export function validateShip(input) {
  const result = shipSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
