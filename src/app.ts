import cors from 'cors';
import express, { Application } from 'express';

// Initialize app
const app: Application = express();

// Setup Cors, Parser, URL encoded
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
// app.use('/books', bookRoute); // Sample router

export default app;
