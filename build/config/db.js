"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('pg').defaults.parseInt8 = true;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const Umzug = require('umzug');
dotenv_1.default.config();
class Database {
    constructor() {
        this.db = process.env.DB_NAME || 'localdb';
        this.user = process.env.DB_USER || 'postgres';
        this.password = process.env.DB_PASS || 'rgbXYZ@9182';
        this.host = process.env.DB_HOST || 'localhost';
        this.port = Number(process.env.DB_PORT) || 5432;
        this.maxPool = Number(process.env.MAX_POOL) || 100;
        this.minPool = Number(process.env.MIN_POOL) || 1;
        this.database = new sequelize_1.Sequelize(this.db, this.user, this.password, {
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
        });
    }
}
let databaseInstance = new Database().database;
exports.default = databaseInstance;
