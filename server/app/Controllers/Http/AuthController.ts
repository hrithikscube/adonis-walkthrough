const Validator = require('validatorjs')
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

    public async login({ request, response, auth }: HttpContextContract) {

        try {
            const email = request.input('email')
            const password = request.input('password')

            let payload = request.only(['email', 'password'])

            const rules: any = {
                email: 'required|email|max:255',
                password: 'required'
            }

            const validation = new Validator(payload, rules)
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors)
            }

            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '30 mins'
            })
            return token
        } catch {
            return response.unauthorized('Invalid credentials')
        }
    }
}
