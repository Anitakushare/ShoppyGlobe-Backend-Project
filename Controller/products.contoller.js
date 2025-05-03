import mongoose from 'mongoose';
import { productModel } from '../Utils/importProduct.js';

//function to fetch All products from mongodb database
export const fetchProducts = async (req, res) => {
    try {
      const fetchedProducts = await productModel.find(); 

      //check if product is fetched or not if not then send error
      if (!fetchedProducts || fetchedProducts.length === 0) {
        return res.status(404).json({ message: "No products found" });
      }
      //if Yes then send the successfull message
      res.status(200).json({ 
        message: "Successfully fetched all products", 
        products:fetchedProducts 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };

  //function to fetch products by id from mongodb database
  export const fetchProductById = async(req,res)=>{
    try{
      //extract id from req header
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Invalid product ID format" });
      }
       //fetch product by id
        const productsById=await productModel.findById(id);

        //if no product matches to the id,send the error msg
        if (!productsById) {
           return res.status(404).json({ message: `The Product with id ${id} not found` });
          }
          //if yes, send successfull message
          res.status(200).json({ 
            message: `The Product with id ${productsById.id} has been fetched`, 
            products:productsById 
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Server error" });
        }
    
  }

  
  
  

  
 