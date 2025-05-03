import mongoose from "mongoose";

//Cart model schema
const cartSchema = new mongoose.Schema(
  {
  productId: { type: String, required: true },
  quantity: { type: Number, default: 1 },
 });
  
  const cartModel = mongoose.model("cart", cartSchema);
  export default cartModel;