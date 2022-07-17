import {Entity, EntityRepository, Repository} from 'typeorm';
import { User } from '../database/entity/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    
}