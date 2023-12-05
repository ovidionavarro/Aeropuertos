import z from 'zod'
const workshopSchema = z.object({
  ship: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  startDate: z.string().refine((val) => !isNaN(Date.parse(val))),
  finalDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)))
    .nullable(),
  idReparation: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  time: z
    .string()
    .refine((val) => !isNaN(parseInt(val, 10)))
    .nullable(),
  increase: z
    .string()
    .refine((val) => !isNaN(parseInt(val, 10)))
    .nullable(),
  discount: z
    .string()
    .refine((val) => !isNaN(parseInt(val, 10)))
    .nullable(),
  status: z.string().nullable()
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
