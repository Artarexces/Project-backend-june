import { Request, Response } from "express";
import { Ibooks } from "../Interfaces/booksInterface";
import { ApiRes } from "../Interfaces/ApiRes";
import { Book } from "../models/booksModels";


// Obtener todos los libros "GETall"

const getAllBooks = async (req:Request, res:Response) => {
    try {
        const books = await Book.find();
        const response : ApiRes<Ibooks[]> ={
            success:true,
            data: books,
        }
        return res.status(200).json(response);
    } catch (error) {
        const response: ApiRes<null> ={
            success: false,
            message: 'Error al obtener libros',
        }
        return res.status(500).json(response)
    }
}


// Obtener un librp por su ID "GETid"

const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            const response: ApiRes<null> = {
                success: false,
                message: 'Libro no encontrado',
            };
            return res.status(500).json(response)
        }
        const response: ApiRes<Ibooks> = {
            success: true,
            data: book,
        }
        return res.status(200).json(response)
    } catch (error) {
        const response: ApiRes<null> = {
            success:true,
            message: 'Error al buscar el libro'
        }
        return res.status(500).json(response)
    }
}


// Crear un nuevo libro "POSTbook"

const postBook = async (req: Request, res: Response) => {
    try {
        const book = new Book(req.body)
        await book.save()
        const response: ApiRes<Ibooks> = {
            success: true,
            data: book,
            message: 'Libro creado con exito'
        }
        return res.status(200).json(response)
    } catch (error) {
        const response: ApiRes<null> = {
            success: false,
            message:'Error al crear libro'
        }
        return res.status(500).json(response)
    }
}


// Editar un libro por su ID "PATCHbook"

const editBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true,})
        if (!book) {
            const response: ApiRes<null> = {
                success: false,
                message: 'Libro no encontrado...'
            }
            return res.status(500).json(response)
        }
        const response: ApiRes<Ibooks> = {
            success: true,
            data: book,
            message: 'Libro editado con exito'
        }
        return res.status(200).json(response)
    } catch (error) {
        const response: ApiRes<null> = {
            success: false,
            message: 'Error al encontrar el libro',
        }
        return res.status(500).json(response)
    }
}


// Eliminar un libro por su ID "DELETEbook"

const deleteBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if(!book) {
            const response: ApiRes<null> = {
                success: false,
                message: 'Libro no encontrado',
            }
            return res.status(500).json(response)
        }
        const response: ApiRes<Ibooks> = {
            success: true,
            data: book,
            message: 'Libro eliminado extiosamente'
        }
        return res.status(200).json(response)
    } catch (error) {
        const response: ApiRes<null> = {
            success: false,
            message: 'Error al encontrar libro',
        }
        return res.status(500).json(response)
    }
}