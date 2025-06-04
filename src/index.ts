import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { connectDB } from "./utils/db";


const PORT = process.env.PORT || 2828

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}))

// app.use()

connectDB()
app.listen(PORT, () => {
    console.log(`🚀 Servidor en escucha http://localhost:${PORT}`);
} )