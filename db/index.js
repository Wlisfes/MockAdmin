
const mysql = require('mysql')

const pool = mysql.createPool({
    host: '111.231.222.196',
    user: 'mocks',
    password: '77243',
    database: 'mocks',
    charset: 'utf8',
    insecureAuth: true
})


let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release(); //为每一个请求都建立一个connection使用完后调用connection.release(); 直接释放资源。 
                    //query用来操作数据库表
                })
            }
        })
    })
}

module.exports = query


