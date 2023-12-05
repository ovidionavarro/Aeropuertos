import z from 'zod'
const flightSchema = z.object({
  ship: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  date: z.string().refine((val) => !isNaN(Date.parse(val))),
  airport: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  plannedDate: z.string().refine((val) => !isNaN(Date.parse(val)))
})
export function validateFlight(input) {
  const result = flightSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
