import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Content } from './Content';
import { User } from './User';

export enum Categories {
  DEFAULT = 'default',
  TUNED = 'tuned',
  CYMBAL = 'cymbal',
  SMALL = 'small',
  DRUM = 'drum',
  ELECTRONIC = 'ELECTRONIC'
}

@Entity('instruments')
export class Instrument extends Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  value: number;

  @Column()
  location: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: Categories, default: Categories.DEFAULT })
  category: Categories;

  @Column()
  notes: string;

  @Column({ nullable: true })
  size: string;

  @Column()
  case: string;

  @Column({ nullable: true })
  user_id: number;

  @ManyToOne(() => User, (user) => user.instruments)
  @JoinColumn({
    name: 'user_id'
  })
  user: User;
}

// TODO review how the manytoone relationship looks/works when adding an instrument.
