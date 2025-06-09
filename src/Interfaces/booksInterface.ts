import { Document } from "mongoose"

// Interface de libros
export interface Ibooks extends Document{
    title: String
    author: String
    publishedYear?: Number
    genre?: String
    available: Boolean
}
