import { Request, Response } from "express";
import { getRandomPersonService } from "../services/person.services";

export async function getRandomPerson(req: Request, res: Response) {
  const random = await getRandomPersonService();
  res.send(random);
}
