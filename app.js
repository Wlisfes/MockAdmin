'use strict'


import Koa from 'koa'
import json from 'koa-json'
import logger from 'koa-logger'
import bodyparser from 'koa-bodyparser'
import cors from 'koa-cors'
import Static from 'koa-static'
import Router from './router'
const app = new Koa()


app.use(logger())
app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}))
app.use(json())
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))
app.use(Static(__dirname + '/public'))
new Router(app).init()

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

const port = process.env.PORT || 9999
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})