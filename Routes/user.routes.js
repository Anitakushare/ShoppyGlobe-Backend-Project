import express from "express";
import { registerUser } from "../Controller/user.controller.js";//register user middleware
import { validateUser } from "../Middleware/validateUser.js";//validate user middleware
import { verifyUser } from "../Middleware/verifyUser.js";//verify user middleware


export function userRoute(app){
    //Route:Register user added into the user collection
    app.post("/api/register",validateUser,registerUser);
    
    //Route:for user login
    app.post("/api/login",verifyUser);
}
