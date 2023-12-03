import z from 'zod'
const typeSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'name is required'
  })
})
export function validateType(input) {
  const result = typeSchema.safeParse(input)
  if (!result.success) {
    return { Ok: false, msg: result.error.issues[0].message }
  }
  return { Ok: true, msg: 'ok' }
}

export function validatePartialType(input) {
  return typeSchema.partial().safeParse(input)
}
