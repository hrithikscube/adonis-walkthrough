import User from 'App/Models/User';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
const Validator = require('validatorjs')

export default class UsersController {

    //index, store, show, destroy, update
    public async index() {
        try {
            return User.all()
        }
        catch {
            return {
                error: 'Something went wrong'
            }
        }
    }

    public async store({ request, response }: HttpContextContract) {
        try {
            let payload = request.only(['email', 'password'])

            const rules: any = {
                email: 'required|email|max:255',
                password: 'required'
            }

            const validation = new Validator(payload, rules)
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors)
            }

            let user = new User()
            user.email = payload.email
            user.password = payload.password
            await user.save()

            return response.ok({
                message: 'User Created',
                data: user
            })

        }
        catch (e) {
            return response.internalServerError(
                {
                    message: 'Something went wrong',
                    error: e
                }
            )
        }
    }

}
