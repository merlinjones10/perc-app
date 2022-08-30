import { Seeder, Factory } from 'typeorm-seeding';
import { Connection, In } from 'typeorm';
import { User } from '../entity/User';
import { Instrument } from '../entity/Instrument';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const users = await factory(User)().createMany(3);

    await factory(Instrument)()
      .map(async (instrument) => {
        instrument.user = users[Math.floor(Math.random() * users.length)];
        return instrument;
      })
      .createMany(30);
  }
}
