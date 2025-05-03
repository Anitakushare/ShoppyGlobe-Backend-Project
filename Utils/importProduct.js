import mongoose from "mongoose";
import connectDB from "../config/db.js";
import fetch from 'node-fetch';

//// Define a Mongoose model for products with a flexible schema
export const productModel = mongoose.model(
    "products",
    new mongoose.Schema({}, { strict: false }) // Accept any structure by disabling schema strictness
  );

  //Import function for Add Products to database using external api
export const importProducts = async () => {
    try{
    await connectDB();
    const count = await productModel.estimatedDocumentCount();
    if (count > 0) {
      console.log("Products already exist in the database. Skipping import.");
      return;
    }
    //Fetch Products froman external Api
    const response = await fetch('https://dummyjson.com/products');
    const data= await response.json();
    console.log(data);
    const formatted = data.products;

    //insert multiple products at one time using inserMany()
    await productModel.insertMany(formatted);
    console.log('Products Imported successfully');
   
}catch(err){
    console.error("Error importing products:", err.message);
}finally{
    await mongoose.connection.close();
    
}
  };
  