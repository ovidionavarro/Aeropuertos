import z from 'zod'
const reparationSchema = z.object({
  description: z.string(),
  priceHour: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  idReparationType: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  idInstalation: z.string().refine((val) => !isNaN(parseInt(val, 10)))
})
export function validateReparation(input) {
  const result = reparationSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
