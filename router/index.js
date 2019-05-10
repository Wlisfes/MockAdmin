/*
 * @Author: Parker 
 * @Date: 2019-05-10 16:53:29 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-05-10 17:40:08
 */


import Router from 'koa-router'

export default class {
    constructor(app) {
        this.router = Router()
        this.app = app
    }

    init() {
        let { router,app } = this
    }

    Mount() {
        let { router,app } = this

        router.get('/', this.index)
        app.use(router.routes()).use(router.allowedMethods())
    }

    async index(ctx) {
        ctx.body = `<h1 style="font-size: 60px;
                            text-align: center;">
                        Holle World
                    </h1>`
    }
}