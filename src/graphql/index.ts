import { ApolloServer } from "@apollo/server";
import { MutationResolvers, QueryResolvers } from "./resolvers";
import { queries } from "./queries";
import { typedefs } from "./typedefs";
import { mutations } from "./mutation";

export const createApolloServer = async () => {
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
    await gqlServer.start();
    return gqlServer;
}