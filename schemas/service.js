import z from 'zod'
const serviceSchema = z.object({
  description: z.string(),
  price: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  idInstalation: z.string().refine((val) => !isNaN(parseInt(val, 10)))
})
export function validateService(input) {
  const result = serviceSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
