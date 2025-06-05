import { Request, Response } from "express";
import { Ibooks } from "../Interfaces/booksInterface";
import { ApiResponse } from "../Interfaces/ApiResponse";
import { Book } from "../models/booksModels";


// Obtener todos los libros "GETall"

const getAllBooks = async (req:Request, res:Response) => {
    try {
        const books = await Book.find();
        const response : ApiResponse<Ibooks[]> ={
            success:true,
            data: books,
        };
        return res.status(200).json(response);
    } catch (error) {
        const response: ApiResponse<null> ={
            success: false,
            message: 'Error al obtener libros',
        };
        return res.status(500).json(response)
    }
};


// Obtener un librp por su ID "GETid"


const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            const response: ApiResponse<null> = {
                success: false,
                message: 'Libro no encontrado',
            };
            return res.status(500).json(response)
        };

        const response: ApiResponse<Ibooks> = {
            success: true,
            data: book
        };
        return res.status(200).json(response)
    } catch (error) {
        const response: ApiResponse<null> = {
            success:true,
            message: 'Error al buscar el libro'
        }
        
    }
};

