import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Instrument } from './Instrument';
import { Content } from './Content';

@Entity('users')
export class User extends Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToMany(() => Instrument, (instrument) => instrument.user)
  instruments: Instrument[];
}
