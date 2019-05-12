/*
 * @Author: Parker 
 * @Date: 2019-05-10 16:53:29 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-05-12 17:48:39
 */


import Router from 'koa-router'
import Reply from './Reply'
import * as Admin from './controller/Admin'
import { Stctic, upload } from './controller/upload'


export default class {
    constructor(app) {
        this.app = app
    }

    init() {
        let router = new Router()

        router.get('/', this.index)
        router.post('/Admin/enrolment', Admin.enrolment)
        router.post('/Admin/login', Admin.login)
        router.post('/Admin/upload', Stctic.single('file'), upload)

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