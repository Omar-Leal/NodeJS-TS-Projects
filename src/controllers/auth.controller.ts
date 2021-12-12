import { Request, Response } from 'express'
import userModel, { IUserData } from '../models/user'
import userToken from 'jsonwebtoken'

export const signup = async ( request: Request, response: Response ) => {
   /** Saving the user Data! */
   const user: IUserData = new userModel({
      username: request.body.username,
      email: request.body.email,
      password: request.body.password   
  });
  const savedUserData = await user.save();
  
  // creating TOKEN
  userToken.sign( { _id: savedUserData._id 'sasasas',    } )
   response.send('just sign up');
};

export const signIn = ( request: Request, response: Response ) => {
  response.send('now sign in...')
};

export const profile = ( request: Request, response: Response ) => {
  response.send(' this is your profile :)')
};