/*
 * @Author: Parker 
 * @Date: 2019-05-10 17:25:21 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-05-10 18:00:15
 * @Types 标签操作
 */

import bd from '../../db'
import Reply from '../Reply'

export const All = async (ctx) => {
    let res = await bd('SELECT * FROM tags')
    Reply(ctx, {
        code: 200,
        message: 'ok',
        data: res
    })
} 