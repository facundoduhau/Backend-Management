import express from 'express';
import cors from 'cors';

const app = express();

// Basics
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));

// CORS

app.use(cors({
	origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
	credentials: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
	allowedHeaders: ["Authorization", "Content-Type"],
}));

// Import Routes

import healthCheckRoutes from './src/routes/healthCheckRoutes.js';

app.use('/api/v1/healthcheck', healthCheckRoutes);

app.get('/', (req, res) => {
	res.send('Hello World!')
});

export default app;
