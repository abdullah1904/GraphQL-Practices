import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { createApolloServer } from "./graphql";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
const PORT = Number(process.env.PORT) || 8080;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
    res.send("Hello World");
});

createApolloServer()
    .then((gqlServer) => {
        // @ts-expect-error
        app.use("/graphql", expressMiddleware(gqlServer));
        app.listen(PORT, () => {
            console.log("App is running on port", PORT);
        });
    })
    .catch((error) => {
        console.error(error);
    });
