import mongoose from "mongoose"
import cartModel from "../Model/cart.model.js";

export const addToCart = async (req, res) => {
    try {
    
        const cartItem = req.body;
    
        // Create and save new cart item in the database
        await cartModel.create(cart);
    
        // Send success response with status code 201 (Created)
        res.status(201).json({ message: "sucessfully added to cart", cartItem });
      } catch (error) {
        res.status(500).json({ message: "Server Error",error:error.message });
      }
    };
  
  export const updateCartItem = async (req, res) => {
    try {
      // Get product ID from request parameters
      const id =req.params.productId;
      
      // Find and update the cart item by productId
      const updatedCartItem = await cartModel.updateOne(
        { productId: id },
         req.body 
      );
  
      // Send success response with updated result
      res.status(200).json({ message: "updated sucessfully", updatedCartItem });
    } catch (error) {
    
      res.status(500).json({ message: "Failled to update",errr:error.message });
    }
  };
  
  export const deleteCartItem = async (req, res) => {
    // Get product ID from request parameters
    const id  = req.params.productId;
    try {
      // Find and delete the cart item by productId
      const deletedItems = await cartModel.deleteOne({productId:id});
    
      res.status(201).json({message:"Item deleted succesfully",deletedItems});
    } catch (error) {
      res.status(500).json({ message: "Failed to delete cart item", error:error.message});
    }
  };