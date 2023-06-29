import { getRandomPersonDB } from "../repositories/person.repository";

export async function getRandomPersonService(): Promise<RandomPersonObj> {
  const result = await getRandomPersonDB();
  return result.rows[0];
}

type RandomPersonObj = { id: number; firstName: string; lastName: string };
