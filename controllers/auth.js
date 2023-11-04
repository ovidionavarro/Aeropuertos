export default class AuthController {
  constructor(Model) {
    this.Model = Model
  }

  login = async (req, res) => {
    const { body } = req
    const { username, password } = body
    console.log(username, password)
  }
}
