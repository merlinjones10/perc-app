import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './database/entity/User';
import { Instrument } from './database/entity/Instrument';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'secret',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [User, Instrument],
  migrations: ['migration/**/*.ts'],
  subscribers: []
});
