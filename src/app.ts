import express, { Application, response } from 'express'
import morgan from 'morgan';
import authRoute from './routes/auth'



const app: Application = express();

//*** Setting server (ports) */
app.set( 'port', 4000 );

/** routes to app */
app.use( '/api/auth', authRoute );

//** middleware  */
app.use(morgan('dev'));
app.use(express.json())



export default app;