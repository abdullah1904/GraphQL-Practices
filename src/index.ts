import express, { Request, Response } from "express";
import {ApolloServer} from "@apollo/server"

const app = express();


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(8080, (): void => {
    console.log("Server running on port 8080");
});
