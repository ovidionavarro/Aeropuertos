import z from 'zod'
const implicationSchema = z.object({
  ship1: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  startDate1: z.string().refine((val) => !isNaN(Date.parse(val))),
  ship2: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  startDate2: z.string().refine((val) => !isNaN(Date.parse(val)))
})
export function validateImplication(input) {
  const result = implicationSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
