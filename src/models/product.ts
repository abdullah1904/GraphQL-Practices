import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    soldOut: String,
    inventory: Number,
});

const Product = model("Product", ProductSchema);
export default Product;
