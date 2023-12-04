import z from 'zod'
const clientSchema = z.object({
  name: z.string(),
  nationality: z.string(),
  username: z.string().email({
    invalid_type_error: 'username must be a email',
    required_error: 'username is required'
  }),
  password: z.string(),
  idClientType: z.string().refine((val) => !isNaN(parseInt(val, 10)))
})
export function validateClient(input) {
  const result = clientSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
