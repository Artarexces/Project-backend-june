import { Document } from "mongoose"

export interface Ibooks extends Document{
    title: String
    author: String
    publishedYear?: Number
    genre?: String
    available: Boolean
}
