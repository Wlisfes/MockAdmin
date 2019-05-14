/*
 * @Author: 情雨随风 
 * @Date: 2019-05-11 00:47:21 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-05-14 17:54:00
 * @Types 管理员用户模块
 */


import bd from '../../db'
import Reply from '../Reply'


//注册
export const EnrolMent = async (ctx) => {
    let { Admin,password,age,descr,name,nickName,sex,Avatar } = ctx.request.body
    let date = new Date()
    let userId = date.getTime()
    if(!Admin) {
        Reply(ctx, { code: 201, message: 'error Admin null' })
        return
    }

    else if(!password) {
        Reply(ctx, { code: 201, message: 'error password null' })
        return
    }

    else if(!age) {
        Reply(ctx, { code: 201, message: 'error age null' })
        return
    }

    else if(!descr) {
        Reply(ctx, { code: 201, message: 'error descr null' })
        return
    }

    else if(!name) {
        Reply(ctx, { code: 201, message: 'error name null' })
        return
    }

    else if(!nickName) {
        Reply(ctx, { code: 201, message: 'error nickName null' })
        return
    }

    else if(!sex) {
        Reply(ctx, { code: 201, message: 'error sex null' })
        return
    }

    else if(!Avatar) {
        Avatar = sex === '男' ? 
        'localhost:9999/static/1557678889694.jpg' :
        'localhost:9999/static/1557678889694.jpg'
    }

    try {
        let result = await bd(`SELECT * FROM adminuser WHERE name='${name}'`)

        if(result.length !== 0) {
            Reply(ctx, { code: 203, message: '用户名已注册！' })
            return
        }
        else {
            let sql = `INSERT INTO adminuser(userId,name,password,age,descr,nickName,sex,Avatar,Admin,date) VALUES(?,?,?,?,?,?,?,?,?,?)`
            let val = [userId,name,password,age,descr,nickName,sex,Avatar,Admin,date]
            let res = await bd(sql, val)

            Reply(ctx, { code: 200, message: 'ok', data: res })
        }
    } catch (error) {
        Reply(ctx, { code: 202, message: '注册失败！' })
        return
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
