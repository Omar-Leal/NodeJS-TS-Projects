import { Schema, model, Document } from "mongoose";
import bcrypt from 'bcryptjs'

type passwordType = string;

export interface IUserData<S = string> extends Document {
  username: S;
  email: S;
  password: S;
  encryptPass( password: passwordType ): Promise<string>;
  validatePass( password: passwordType ): Promise<boolean>;

}

const userModel = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  }
});


userModel.methods.encryptPass = async ( password: string ): Promise<string> => {
    const salted = await bcrypt.genSalt( 10 );
    return bcrypt.hash( password, salted );

};

userModel.methods.validatePass = async function ( password: string ): Promise<boolean> {
  return await bcrypt.compare( password, this.password);
   
}

export default model<IUserData>( 'user', userModel );