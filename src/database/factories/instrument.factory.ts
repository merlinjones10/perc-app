import { faker, Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { User } from '../entity/User';
import { Categories, Instrument } from '../entity/Instrument';

define(Instrument, (faker: Faker) => {
  const instrument = new Instrument();
  instrument.case = 'ye';
  instrument.value = 200;
  instrument.location = 'ye';
  instrument.name = 'ye';
  instrument.category = Categories.DEFAULT;
  instrument.notes = 'ye';
  instrument.size = 'ye';
  return instrument;
});

// TODO later:seed instruments with assigned user
// https://dev.to/franciscomendes10866/how-to-seed-database-using-typeorm-seeding-4kd5
