import z from 'zod'
const airPortSchema = z.object({
  name: z.string(),
  geoPos: z.string(),
  direction: z.string()
})
export function validateAirPort(input) {
  const result = airPortSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
