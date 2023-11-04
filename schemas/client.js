import z from 'zod'
const clientSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'name is required'
  })
})
export function validateClient(input) {
  return clientSchema.safeParse(input)
}

export function validatePartialClient(input) {
  return clientSchema.partial().safeParse(input)
}
