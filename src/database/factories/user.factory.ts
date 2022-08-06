import { Faker, faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { User } from '../entity/User';

define(User, (faker: Faker) => {
  // const gender = faker.random.number(1);
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  const user = new User();
  user.first_name = firstName;
  user.last_name = lastName;
  return user;
});

// TODO later:seed instruments with assigned user
// https://dev.to/franciscomendes10866/how-to-seed-database-using-typeorm-seeding-4kd5
