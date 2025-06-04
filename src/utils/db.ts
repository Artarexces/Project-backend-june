import mongoose from "mongoose";

process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

export const connectDB = async () => {
    try {
        await mongoose.connect(URI_DB)
        console.log('🌱 Conectado a MongoDB con exito!')
    } catch (error) {
        console.error(error,'No se pudo establecer conexión con MongoDB.')
    }
}

