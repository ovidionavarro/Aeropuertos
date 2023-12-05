const authorize = (role) => {
  return async (req, res, next) => {
    if (req.roleId !== role) {
      return res.status(403).send('Forbidden')
    }

    next()
  }
}
export default authorize
