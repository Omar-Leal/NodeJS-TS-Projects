import { Router } from 'express'
import { signIn, signup, profile } from '../controllers/auth.controller'


const authRoute: Router =  Router();
      authRoute.post('/signup', signup);
      authRoute.post( '/signin', signIn );
      authRoute.get( '/profile', profile );

export default authRoute;