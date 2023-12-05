import z from 'zod'
const contractServiceSchema = z.object({
  service: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  client: z.string().refine((val) => !isNaN(parseInt(val, 10))),
  date: z.string().refine((val) => !isNaN(Date.parse(val))),
  valuation: z
    .string()
    .refine((val) => !isNaN(parseInt(val, 10)))
    .nullable()
})
export function validateContractService(input) {
  const result = contractServiceSchema.safeParse(input)
  if (!result.success) {
    const err = []
    result.error.issues.forEach((element) => {
      err.push(element.path.toString() + ': ' + element.message)
    })
    return { Ok: false, msg: err }
  }
  return { Ok: true, msg: 'ok' }
}
