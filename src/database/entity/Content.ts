import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
