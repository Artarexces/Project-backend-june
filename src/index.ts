import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import router from "./routes/booksRoutes";


const PORT = process.env.PORT || 2828

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/api', router)

app.use('/', (req,res) =>{
    res.json({ success: true, message:'API biblioteca' })
})

// Maenjo de errores
app.use((req, res)=>{
    res.status(404).json({ success: false, message: 'Ruta no encontrada'})
})

app.listen(PORT, () => {
    connectDB()
    console.log(`🚀 Servidor en escucha http://localhost:${PORT}`);
})