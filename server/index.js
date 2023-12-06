import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

//local imports
import connectDb from './db.js'
import employeeRoutes from './controllers/employee.controller.js'
import middlewares from './middlewares/index.js';
const { errorHandler } = middlewares;

const { json } = bodyParser;

const app = express()
//middleware
app.use(json())
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api/employees', employeeRoutes)
app.use(errorHandler)

connectDb()
    .then(() => {
        console.log('db connection succeeded.')
        app.listen(3000,
            () => console.log('server started at 3000.'))
    })