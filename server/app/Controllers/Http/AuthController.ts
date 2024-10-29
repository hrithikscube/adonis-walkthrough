import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

    public async login({ request, response, auth }: HttpContextContract) {

        const email = request.input('email')
        const password = request.input('password')

        try {
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '30 mins'
            })
            return token
        } catch {
            return response.unauthorized('Invalid credentials')
        }
    }
}
