import { User } from './src/database/entity/User';
import { Instrument } from './src/database/entity/Instrument';

module.exports = {
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*{.ts,.js}'],
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'merlinjones',
  password: 'postgres',
  database: 'percdb',
  synchronize: true,
  logging: false,
  entities: [User, Instrument],
  migrations: [],
  subscribers: []
};
