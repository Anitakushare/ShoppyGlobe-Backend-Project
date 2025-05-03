import express from "express";
import {addToCart,updateCartItem,deleteCartItem} from '../Controller/cart.controller.js';
import { validateCart } from "../Middleware/validateCart.js";
import {duplicate} from "../Middleware/checkDuplicate.js";
import {jwtAuth} from '../JwtAuth/userJwtAuth.js'
export function cartRoute(app){
    //Route: Add product to The cart
    app.post("/api/cart",jwtAuth,validateCart,duplicate, addToCart);
    
    //Route: Update carItem product to The cart
    app.put("/api/cart/:productId",jwtAuth, updateCartItem);
   
    //Route: Delete cartItem from The cart
    app.delete("/api/cart/:productId",jwtAuth, deleteCartItem);

}
