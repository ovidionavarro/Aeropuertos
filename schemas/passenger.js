import z from 'zod'
const passengerSchema = z.object({
  ship: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  date: z.string().refine((val) => !isNaN(Date.parse(val))),
  idClient: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  idPassengerType: z.string().refine((val) => !isNaN(parseInt(val, 10)))
})
export function validatePassenger(input) {
  const result = passengerSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
