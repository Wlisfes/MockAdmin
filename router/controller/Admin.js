/*
 * @Author: 情雨随风 
 * @Date: 2019-05-11 00:47:21 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-05-13 17:46:25
 * @Types 管理员用户模块
 */


import bd from '../../db'
import Reply from '../Reply'


//注册
export const enrolment = async (ctx) => {
    let { Admin,age,descr,name,nickName,password,sex,Avatar } = ctx.request.body
    
    if(!Admin) {
        Reply(ctx, {
            code: 201,
            message: 'error Admin null'
        })
    }
    
    if(!age) {
        Reply(ctx, {
            code: 202,
            message: 'error age null'
        })
        console.log(1)
    }
}

//登录
export const login = async (ctx) => {
    let { username,password } = ctx.request.body
    Reply(ctx, {
        code: 200,
        message: 'ok'
    })
}

