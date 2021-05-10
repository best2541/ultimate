import { FastifyServerOptions } from 'fastify'
import buildApp from './app'
import config from './config'

const options: FastifyServerOptions = {
    logger:true
}
const app = buildApp(options)

app.listen(config.port)
console.log(config.port)