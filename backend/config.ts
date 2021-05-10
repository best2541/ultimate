import * as dotenv from 'dotenv'

const config = {
    env: process.env.NODE_ENV || 'deverlopment',
    port: process.env.PORT || 3000
}
export default config