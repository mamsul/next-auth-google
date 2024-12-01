import { Pool } from 'pg'

export const pool = new Pool({
  database: process.env.AUTH_DATABASE_NAME,
  port: Number(process.env.AUTH_DATABASE_PORT),
  host: process.env.AUTH_DATABASE_HOST,
  user: process.env.AUTH_DATABASE_USER,
  password: process.env.AUTH_DATABASE_PASSWORD,
})
