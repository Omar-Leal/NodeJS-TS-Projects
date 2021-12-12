import express, { Application, response } from 'express'
import morgan from 'morgan';
import authRoute from './routes/auth'



const app: Application = express();

//*** Setting server (ports) */
app.set( 'port', 4000 );


//** middleware  */
app.use(morgan('dev'));
app.use(express.json());

/** routes to app */
app.use( '/api/auth', authRoute );




export default app;