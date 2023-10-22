import mysql from "mysql2/promise"

export const db = mysql.createPool({
    host: "35.202.133.188", 
    user: "root",
    password: "123456",
    database: "dbtorta"
});

// a


