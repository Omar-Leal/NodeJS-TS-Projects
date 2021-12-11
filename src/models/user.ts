import { Schema, model } from "mongoose";

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

export default model( 'user', userModel );