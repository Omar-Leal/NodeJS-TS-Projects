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
  user.password = await user.encryptPass( user.password );
  const savedUserData = await user.save();
  
  // creating TOKEN
  const uniqueToken: string = userToken.sign({ 
    _id: savedUserData._id,
  }, process.env.SECRET_TOKEN || 'no_token' );
  response.header('token', uniqueToken).json(savedUserData); 
}; 

export const signIn = async ( request: Request, response: Response ) => {
  const userInput = await userModel.findOne({
    email: request.body.email,
    password: request.body.password
  });
  if ( !userInput ) {
    return response.status( 400 ).json('Email or password not found');
  }
};

export const profile = ( request: Request, response: Response ) => {
  response.send(' this is your profile :)')
};