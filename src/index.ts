import personRouter from "./routes/person.routes";
import express from "express";

const app = express();

app.use(personRouter);

const port:number = Number(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));