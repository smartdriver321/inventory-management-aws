import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

/* API ROUTES */
import dashboardRoutes from './routes/dashboardRoutes'

/* CONFIGURATIONS */
dotenv.config()
const app = express()
const port = Number(process.env.PORT) || 3001

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))

/* ROUTES */
app.use('/dashboard', dashboardRoutes) // http://localhost:8000/dashboard

/* SERVER */
app.listen(port, '0.0.0.0', () => {
	console.log(`Server running on port ${port}`)
})
