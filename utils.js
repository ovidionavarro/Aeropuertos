import bcrypt from 'bcryptjs'
export const getHash = async (pass) => {
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(pass, saltRounds)
  return passwordHash
}

export const fecha = (dia, mes, anno, hora = '00:00') => {
  const _fecha = new Date(anno, mes - 1, dia)
  const [horas, minutos] = hora.split(':')
  _fecha.setHours(horas, minutos, 0, 0)
  return _fecha
}

export const fechaFormat = (dia, mes, anno) => {
  const fecha = new Date(anno, mes - 1, dia)
  const fechaFormateada = fecha.toISOString().slice(0, 10)
  return fechaFormateada
}
