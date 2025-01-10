import { ApolloServer } from "@apollo/server";
import { MutationResolvers, QueryResolvers } from "./resolvers";
import { queries } from "./queries";
import { typedefs } from "./typedefs";
import { mutations } from "./mutation";
import { connectDB } from "../lib/connectDB";

export const createApolloServer = async () => {
    try {
        const gqlServer = new ApolloServer({
            typeDefs: `#graphql
            ${typedefs}
            type Query{
                ${queries}
            }
            type Mutation{
                ${mutations}
            }
        `,
            resolvers: {
                Query: {
                    ...QueryResolvers,
                },
                Mutation: {
                    ...MutationResolvers,
                }
            },
        });
        await Promise.all([connectDB(), gqlServer.start()]);
        return gqlServer;
    }
    catch (error) {
        console.error(error);
        throw new Error("Error while creating Apollo Server");
    }
}