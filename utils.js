import bcrypt from 'bcryptjs'
export const getHash = async (pass) => {
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(pass, saltRounds)
  return passwordHash
}
