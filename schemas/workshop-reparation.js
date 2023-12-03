import z from 'zod'
const workshopSchema = z.object({
  ship: z.number({
    invalid_type_error: 'ship must be a number',
    required_error: 'ship is required'
  }),
  startDate: z.date({
    invalid_type_error: 'startDate must be a date',
    required_error: 'startDate is required'
  }),
  finalDate: z.date({
    invalid_type_error: 'finalDate must be a date',
    required_error: 'finalDate is required'
  }),
  idReparation: z.number({
    invalid_type_error: 'idReparation must be a number',
    required_error: 'idReparation is required'
  }),
  time: z.number().nonnegative({
    invalid_type_error: 'time must be a number',
    required_error: 'time is required'
  }),
  increase: z.number().nonnegative({
    invalid_type_error: 'increase must be a number',
    required_error: 'increase is required'
  }),
  discount: z.number().nonnegative({
    invalid_type_error: 'idInstalation must be a number',
    required_error: 'idInstalation is required'
  }),
  status: z.string({
    invalid_type_error: 'status must be a number',
    required_error: 'status is required'
  })
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
