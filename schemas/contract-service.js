import z from 'zod'
const contractServiceSchema = z.object({
  service: z.string().refine((val) => !isNaN(parseInt(val, 10)), {
    invalid_type_error: 'service must be a IdService',
    required_error: 'service is required'
  }),
  client: z.string({
    invalid_type_error: 'client must be a IdClient',
    required_error: 'client position is required'
  }),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    invalid_type_error: 'date must be a Date',
    required_error: 'date is required'
  }),
  valuation: z.string().nullable({
    invalid_type_error: 'valuation must be a number'
  })
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
