import z from 'zod'
const valuateReparationSchema = z.object({
  ship: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  date: z.string().refine((val) => !isNaN(Date.parse(val))),
  valuation: z
    .string()
    .refine((val) => !isNaN(parseInt(val, 10)))
    .nullable()
})
export function validateValuateReparation(input) {
  const result = valuateReparationSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
