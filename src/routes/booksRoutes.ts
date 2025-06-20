import { Router } from "express";
import { getAllBooks, getBookById, postBook, editBookById, deleteBookById } from "../controllers/booksControllers";

const router = Router(); 
// Rutas peticiones HTTP
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', postBook);
router.patch('/books/:id', editBookById);
router.delete('/books/:id', deleteBookById);

export default router