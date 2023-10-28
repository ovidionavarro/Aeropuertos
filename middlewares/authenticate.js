import jwt from 'jsonwebtoken'
const authenticate = (req, res, next) => {
  const authorization = req.get('authorization')
  let token = ''
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id || !decodedToken.roleId) {
    return res.status(401).json({ error: 'Invalid token' })
  }
  const { id, roleId } = decodedToken
  req.id = id
  req.roleId = roleId
  next()
}
export default authenticate
