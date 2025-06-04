import { Schema, Document, model } from "mongoose";

export interface Ibooks extends Document{
    title: String
    author: String
    publishedYear?: Number
    genre?: String
    available: Boolean
}

const BookSchema = new Schema<Ibooks>({
    title:{ type: String, required: true, unique: true },
    author: { type: String, required: true },
    publishedYear: { type: Number },
    genre: { type: String },
    available: {type: Boolean, default: true}
}) 


export const Books = model<Ibooks>('Books', BookSchema)
 