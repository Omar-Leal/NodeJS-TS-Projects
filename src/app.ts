import express, { Application } from 'express'
import morgan from 'morgan';
import authRoute from './routes/auth'



const app: Application = express();

//*** Setting server (ports) */
app.set( 'port', 4000 );

/** routes to app */
app.use( authRoute );

//** middleware  */
app.use(morgan('dev'))


export default app;