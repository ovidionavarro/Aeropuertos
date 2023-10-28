export default class AuthController {
  static login = async (req, res) => {
    const { body } = req
    const { username, password } = body
    console.log(username, password)
  }
}
