import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './database/entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'merlinjones',
  password: 'postgres',
  database: 'percdb',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: []
});
