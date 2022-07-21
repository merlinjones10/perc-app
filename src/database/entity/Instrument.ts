import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Content } from './Content';

@Entity('instrument')
export class Instrument extends Content {
  @Column({ type: 'numeric', precision: 10, scale: 2 })
  value: number;

  @Column()
  location: string;

  @Column()
  description: string;
}
