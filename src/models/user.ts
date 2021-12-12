import { Schema, model, Document } from "mongoose";

export interface IUserData<S = string> extends Document {
  username: S;
  email: S;
  password: S;
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
})

export default model<IUserData>( 'user', userModel );