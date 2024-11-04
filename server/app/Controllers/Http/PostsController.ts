import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class PostsController {

    public async index({ request, response, auth }: HttpContextContract) {

        try {
            return response.ok({
                message: 'posts api endpoint'
            })
        }
        catch {
            response.internalServerError({
                message: 'Internal Server Error'
            })
        }

    }

}
