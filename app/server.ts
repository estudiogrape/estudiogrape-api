import express from "express";
import { router } from "./routes";
import cors from 'cors';

const app = express();

const allowedOrigins = [
    'https://estudiogrape.vercel.app/',
    'https://estudiogrape.com.br/',
    'https://www.estudiogrape.com.br/',
];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};

// app.use(cors(options));

app.use(express.json());
app.use(router);

app.listen(4000);