import { db } from "../database/database.connection";

export function getRandomPersonDB(){
    return db.query(`
        SELECT * FROM people 
            WHERE id=(SELECT floor(random() * (SELECT COUNT(*) FROM people) + 1)::int)
    `)
}