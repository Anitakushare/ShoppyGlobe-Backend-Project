import mongoose from "mongoose";
import express from "express";

//user Model Schema
const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const userModel = mongoose.model("user", UserSchema);
  export default userModel;