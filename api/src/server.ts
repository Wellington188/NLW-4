import 'reflect-metadata';
import express, { response } from 'express';
import "./database"


const app = express();

app.get("/", (request, response)=>{
    return response.json({message: "Ola Mundo"})
});

app.post("/", (request, response)=>{
    
})

app.listen(3333, () => console.log("Server is running!"));