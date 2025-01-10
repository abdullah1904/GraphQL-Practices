import Product from "../models/product"
import {GraphQLError} from "graphql"

export const QueryResolvers = {
    products: async () => {
        return await Product.find();
    },
    product: async (_: any, payload: { id: string }) => {
        // const product =  await Product.findById(payload.id);
        // if (!product) {
        //     throw new GraphQLError("Product not found",{
        //         extensions: {
        //             code: 'PRODUCT_NOT_FOUND',
        //             http:{
        //                 status: 404
        //             }
        //         }
        //     });
        // }
        // return product;
        return await Product.findById(payload.id);
    }
}

export const MutationResolvers = {
    createProduct: async (_: any, payload: { name: string, description: string, price: number }) => {
        const newProduct = await Product.create({
            name: payload.name,
            description: payload.description,
            price: payload.price,
            inventory: Math.floor(payload.price / 10),
            soldOut: payload.price % 2 === 0 ? "SOLD_OUT" : "AVAILABLE",
        });
        return newProduct;
    },
    deleteProduct: async (_: any, payload: { id: string }) => {
        const deletedProduct = await Product.findByIdAndDelete(payload.id);
        return deletedProduct;
    }
}