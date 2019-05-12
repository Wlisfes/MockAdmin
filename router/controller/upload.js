/*
 * @Author: 情雨随风 
 * @Date: 2019-05-12 17:40:42 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-05-12 18:09:34
 * @Types 图片上传
 */


import multer from 'koa-multer'
import Reply from '../Reply'

//上传配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: (req, file, cb) => {
        cb(null, 'public/static')
    },
    //修改文件名
    filename: (req, file, cb) => {
        var fileFormat = (file.originalname).split('.')
        cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
    }
})

//加载配置
export const Stctic = multer({ storage: storage })

export const upload = async (ctx) => {
    Reply(ctx, {
        code: 200,
        message: 'ok',
        data: `localhost:9999/static/${ctx.req.file.filename}`
    })
}