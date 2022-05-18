"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'trybe',
    password: process.env.DB_PASS || '@Trybe12345',
    database: process.env.DB_NAME || 'TODO_LIST',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};
module.exports = config;
//# sourceMappingURL=database.js.map