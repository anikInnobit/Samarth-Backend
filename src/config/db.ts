require('pg').defaults.parseInt8 = true
import sequelize, { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
const Umzug = require('umzug');
import path from 'path'
import { logger } from '../utils/logger';

dotenv.config()

class Database {
  db: string
  user: string
  password: string
  host: string
  port: number
  maxPool: number 
  minPool: number 
  database: sequelize.Sequelize

  constructor() {
    this.db = process.env.DB_NAME || 'localdb'
    this.user = process.env.DB_USER || 'postgres'
    this.password = process.env.DB_PASS || 'rgbXYZ@9182'
    this.host = process.env.DB_HOST || 'localhost'
    this.port = Number(process.env.DB_PORT) || 5432
    this.maxPool = Number(process.env.MAX_POOL) || 100
    this.minPool = Number(process.env.MIN_POOL) || 1

    this.database = new Sequelize(this.db, this.user, this.password, {
      host: this.host,
      ssl: true,
      dialect: 'postgres',
      dialectOptions: {
        encrypt: true,
      },
      port: this.port,
      logging: false,
      // operatorsAliases: false,
      pool: {
        max: this.maxPool,
        min: this.minPool,
        acquire: 100000,
        idle: 50000,
      },
    })
  }
}
let databaseInstance = new Database().database

export default databaseInstance
