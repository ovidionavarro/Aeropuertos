import z from 'zod'
const clientSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'name is required'
  }),
  nationality: z.string({
    invalid_type_error: 'nationality position must be a string',
    required_error: 'nationality position is required'
  }),
  username: z.string().email({
    invalid_type_error: 'username must be a email',
    required_error: 'username is required'
  }),
  passwordHash: z.string({
    invalid_type_error: 'passwordHash must be a string',
    required_error: 'passwordHash is required'
  }),
  idClientType: z.number({
    invalid_type_error: 'idClientType must be a client',
    required_error: 'idClientType is required'
  })
})
export function validateClient(input) {
  const result = clientSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
