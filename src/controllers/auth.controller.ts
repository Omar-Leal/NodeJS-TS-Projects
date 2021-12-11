import { Request, Response } from 'express'

export const signUp = ( request: Request, response: Response ) => {
  console.log( ' what is the response =>', request.body )
   response.send('just sign up');
};

export const signIn = ( request: Request, response: Response ) => {
  response.send('now sign in...')
};

export const profile = ( request: Request, response: Response ) => {
  response.send(' this is your profile :)')
};