import { Router } from 'express'
import { signIn, signUp, profile } from '../controllers/auth.controller'


const authRoute: Router =  Router();
      authRoute.post( '/signup', signUp );
      authRoute.post( '/signin', signIn );
      authRoute.get( '/profile', profile );

export default authRoute;