"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./database/entity/User");
const Instrument_1 = require("./database/entity/Instrument");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'merlinjones',
    password: 'postgres',
    database: 'percdb',
    synchronize: true,
    logging: false,
    entities: [User_1.User, Instrument_1.Instrument],
    migrations: [],
    subscribers: []
});
