import z from 'zod'
const installationSchema = z.object({
  name: z.string(),
  location: z.string(),
  idTypeInst: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  idAirport: z.string().refine((val) => !isNaN(parseInt(val, 10)))
})
export function validateInstallation(input) {
  const result = installationSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
