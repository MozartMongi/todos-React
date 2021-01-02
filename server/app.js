if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const router = require('./routes')
const errorHandler = require('./Middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', router)

app.use(errorHandler)


app.listen(port, () => {
    console.log(`running on port : ${port}`)
})