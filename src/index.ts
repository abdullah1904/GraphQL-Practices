import express from "express";
import { startStandaloneServer } from "@apollo/server/standalone"
import { expressMiddleware } from "@apollo/server/express4";
import { createApolloServer } from "./graphql";
import cors from "cors";

const app = express();
const PORT = Number(process.env.PORT) || 8080;


app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
    res.send('Hello World');
});

createApolloServer().then(async (gqlServer) => {
    // @ts-expect-error
    app.use('/graphql',expressMiddleware(gqlServer));

    app.listen(PORT, () => {
        console.log('App is running on port', PORT);
    });
})

