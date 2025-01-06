import { ApolloServer } from "@apollo/server";
import Schema from "./schema";

export const createApolloServer = async () => {
    const gqlServer = new ApolloServer({
        typeDefs: `#graphql${Schema}`,
        resolvers: {
            Query: {
                product: () => {
                    return {
                        id: "1",
                        name: "Product 1",
                        description: "Product 1 description",
                        price: 100,
                        soldOut: false
                    }
                }
            }
        },
    });
    await gqlServer.start();
    return gqlServer;
}