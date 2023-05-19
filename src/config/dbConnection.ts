import Umzug = require("umzug");
import sequelize from 'sequelize';
import path from 'path';
import databaseInstance from "./db";
import { logger } from "../common/logger";

const migrate = new Umzug({
    migrations: {
        // indicates the folder containing the migration .js files
        path: path.join(__dirname, '../migrations'),
        pattern: /\.js$/,
        // inject sequelize's QueryInterface in the migrations
        params: [databaseInstance.getQueryInterface(), sequelize],
    },
    storage: 'sequelize',
    storageOptions: {
        sequelize: databaseInstance,
    },
})

const seed = new Umzug({
    migrations: {
        // indicates the folder containing the migration .js files
        path: path.join(__dirname, '../seeders'),
        pattern: /\.js$/,
        // inject sequelize's QueryInterface in the migrations
        params: [databaseInstance.getQueryInterface(), sequelize],
    },
    storage: 'sequelize',
    storageOptions: {
        sequelize: databaseInstance,
    },
})

const databaseConnection = async () => {
    try {
        const result: any = await databaseInstance.authenticate()
            .then(async () => {
                logger.info('Database successfully connected.',{module:'dbConnection.ts'})
                await migrate.up()
                    .then(async () => {
                        logger.info('All migrations performed successfully.',{module:'dbConnection.ts'})
                await seed.up()
                    .then(async () => {
                        logger.info('Data seed successfull.',{module:'dbConnection.ts'})
                                return Promise.resolve()
                            }).catch((err: any) => {
                        logger.error('Seeders failed.',{module:'dbConnection.ts'}, err.message);
                                return Promise.reject()
                            })
                        return Promise.resolve()
                    }).catch((err: any) => {
                        logger.error('Migrations failed.',{module:'dbConnection.ts'},err.message);
                        return Promise.reject()
                    })
                return Promise.resolve()

            }).catch((err) => {
                logger.error('Unable to connect to the database.',{module:'dbConnection.ts'}, err.message);
                return Promise.reject()
            })
        return Promise.resolve()
    }
    catch (err) {
        logger.error('Failed to connect with Database',{module:'dbConnection.ts'}, err)
        return Promise.reject()
    }
}

export default databaseConnection;