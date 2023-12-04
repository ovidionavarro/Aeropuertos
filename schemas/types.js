import z from 'zod'
const typeSchema = z.object({
  name: z.string()
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
