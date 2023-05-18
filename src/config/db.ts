require('pg').defaults.parseInt8 = true
import sequelize, { Dialect, Sequelize } from 'sequelize'
import dbconfig from './config.json';
import dotenv from 'dotenv';
dotenv.config()

type dbconfigType = {
  [key: string]: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
    port: number;
    maxPool: number;
    minPool: number;
  }
}
const config: dbconfigType = JSON.parse(JSON.stringify(dbconfig));

const env: string = process.env.NODE_ENV || "local";

const { host, database, dialect, username, password,port,maxPool,minPool } = config[env];


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
    this.db = database || 'samarthDB'
    this.user = username || 'postgres'
    this.password = password || 'rgbxyz@9182'
    this.host = host || 'localhost'
    this.port = port || 5432
    this.maxPool = maxPool|| 100
    this.minPool = minPool || 1

    this.database = new Sequelize(this.db, this.user, this.password, {
      host: this.host,
      ssl: true,
      dialect: dialect,
      dialectOptions: {
        encrypt: true,
      },
      port: this.port,
      logging: false,
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
