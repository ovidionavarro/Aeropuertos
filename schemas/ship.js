import z from 'zod'
const shipSchema = z.object({
  name: z.string(),
  status: z.string(),
  capacity: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  numberCrews: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  totalPlazas: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  owner: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  classification: z.string().refine((val) => !isNaN(parseInt(val, 10)))
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
