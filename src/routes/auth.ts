import { Router } from 'express'

const authRoute: Router =  Router();

authRoute.get('/', ( req, res ) => {
  res.send('auth route created')
})

export default authRoute;