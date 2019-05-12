/*
 * @Author: 情雨随风 
 * @Date: 2019-05-11 00:47:21 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-05-12 12:10:02
 * @Types 管理员用户模块
 */


import bd from '../../db'
import Reply from '../Reply'
import axios from 'axios'


//注册
export const enrolment = async (ctx) => {
    let { username,password } = ctx.request.body
    console.log(username,password)
    Reply(ctx, {
        code: 200,
        message: 'ok'
    })
}

//登录
export const login = async (ctx) => {
    let { username,password } = ctx.request.body
    Reply(ctx, {
        code: 200,
        message: 'ok'
    })
}

