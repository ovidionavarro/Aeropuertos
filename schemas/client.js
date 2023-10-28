import z from 'zod'
const clientSchema = z.object({
  nombre: z.string({
    invalid_type_error: 'El nombre debe ser un string',
    required_error: 'nombre es requerido'
  })
})
export function validateClient (input) {
  return clientSchema.safeParse(input)
}

export function validatePartialClient (input) {
  return clientSchema.partial().safeParse(input)
}
