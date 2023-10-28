import bcrypt from 'bcrypt'
export const getHash = async (pass) => {
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(pass, saltRounds)
  return passwordHash
}
