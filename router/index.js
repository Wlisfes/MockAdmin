/*
 * @Author: Parker 
 * @Date: 2019-05-10 16:53:29 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-05-10 17:57:05
 */


import Router from 'koa-router'
import Reply from './Reply'

export default class {
    constructor(app) {
        this.router = Router()
        this.app = app
    }

    init() {
        let { router } = this

        router.get('/', this.index)

        this.Mount(router)
    }
    async index(ctx) {
        Reply(ctx, {
            code: 200,
            message: 'Holle World'
        })
    }
    Mount(router) {
        this.app.use(router.routes()).use(router.allowedMethods())
    }
}