import express from 'express';
import dotenv from 'dotenv';
import { studentRouter } from './Router/students.js';
import { mentorsRouter } from './Router/mentors.js';



dotenv.config()


const PORT = process.env.PORT

const app = express();
app.use(express.json());

app.use("/api/student",studentRouter)
app.use("/api/mentor",mentorsRouter)
app.listen(PORT,()=>console.log(`Server running Under localhost:${PORT}`));    