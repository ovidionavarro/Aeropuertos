import z from 'zod'
const workshopSchema = z.object({
  ship: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  startDate: z.string().refine((val) => !isNaN(Date.parse(val))),
  finalDate: z.string().refine((val) => !isNaN(Date.parse(val))),
  idReparation: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  time: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  increase: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  discount: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  status: z.string()
})
export function validateWorkshop(input) {
  const result = workshopSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
