import { Schema, model } from "mongoose";
import { Ibooks } from "../Interfaces/booksInterface";


const BookSchema = new Schema<Ibooks>({
    title:{ type: String, required: true, unique: true },
    author: { type: String, required: true },
    publishedYear: { type: Number },
    genre: { type: String },
    available: {type: Boolean, default: true}
}) 


export const Book = model<Ibooks>('Books', BookSchema)
