import log from './utils/logger'
import app from './app'
import './databse'
import dotenv from 'dotenv'


dotenv.config()
console.log( process.env.SECRET_TOKEN )



const port = app.get('port');
const listen = app.listen( port, () => {
  log.info(` Server version logs...`);

});

function initServer() {
  listen;
  console.log(`>>>> Server running on port ${port}! <<<<`);
}

initServer();


