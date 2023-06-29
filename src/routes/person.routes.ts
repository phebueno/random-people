import { getRandomPerson } from "../controllers/person.controllers";
import { Router } from "express";

const personRouter = Router();

personRouter.get("/person", getRandomPerson);

export default personRouter;