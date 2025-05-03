
import {fetchProductById, fetchProducts} from "../Controller/products.contoller.js";

export function productRoute(app){
    //Route:To fetch All product from mongodb
    app.get("/api/products",fetchProducts);

    //Route:to Fetch A specific product using id
    app.get("/api/products/:id",fetchProductById)
    
}